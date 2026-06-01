(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,80941,e=>{"use strict";var t=e.i(43476),i=e.i(71645);let r=`void main() {
    vUv = uv;

    // SCROLLING LOGIC
    // Separate multipliers for wave, color, and flow offsets
    float waveOffset = -u_y_offset * u_y_offset_wave_multiplier;
    float colorOffset = -u_y_offset * u_y_offset_color_multiplier;
    float flowOffset = -u_y_offset * u_y_offset_flow_multiplier;

    // 1. DISPLACEMENT (WAVES)
    // We add waveOffset to Y to scroll the wave pattern
    v_displacement_amount = cnoise( vec3(
        u_wave_frequency_x * position.x + u_time,
        u_wave_frequency_y * (position.y + waveOffset) + u_time,
        u_time
    ));

    // 2. FLOW FIELD
    // Apply flow offset to scroll the flow field mask
    vec2 baseUv = vUv;
    baseUv.y += flowOffset / u_plane_height; // Scale to match wave speed
    vec2 flowUv = baseUv;

    if (u_flow_enabled > 0.5) {
        if (u_flow_ease > 0.0 || u_flow_distortion_a > 0.0) {
            vec2 ppp = -1.0 + 2.0 * baseUv;
            ppp += 0.1 * cos((1.5 * u_flow_scale) * ppp.yx + 1.1 * u_time + vec2(0.1, 1.1));
            ppp += 0.1 * cos((2.3 * u_flow_scale) * ppp.yx + 1.3 * u_time + vec2(3.2, 3.4));
            ppp += 0.1 * cos((2.2 * u_flow_scale) * ppp.yx + 1.7 * u_time + vec2(1.8, 5.2));
            ppp += u_flow_distortion_a * cos((u_flow_distortion_b * u_flow_scale) * ppp.yx + 1.4 * u_time + vec2(6.3, 3.9));

            float r = length(ppp);
            flowUv = mix(baseUv, vec2(baseUv.x * (1.0 - u_flow_ease) + r * u_flow_ease, baseUv.y), u_flow_ease);
        }
    }

    // Pass the standard flow UV to fragment shader (for texture)
    vFlowUv = flowUv;

    // 3. COLOR MIXING
    // We take the computed flow UVs and apply the color offset
    // Scale by plane height to match wave offset speed (world space vs UV space)
    vec3 color = u_colors[0].color;
    // ...
    vec2 adjustedUv = flowUv;
    adjustedUv.y += colorOffset / u_plane_height; // Scroll the color mixing pattern

    vec2 noise_cord = adjustedUv * u_color_pressure;
    const float minNoise = .0;
    const float maxNoise = .9;

    for (int i = 1; i < 6; i++) {
        if (i < u_colors_count) {
            if (u_colors[i].is_active > 0.5) {
                float noiseFlow = (1. + float(i)) / 30.;
                float noiseSpeed = (1. + float(i)) * 0.11;
                float noiseSeed = 13. + float(i) * 7.;

                float noise = snoise(
                    vec3(
                        noise_cord.x * u_color_pressure.x + u_time * noiseFlow * 2.,
                        noise_cord.y * u_color_pressure.y,
                        u_time * noiseSpeed
                    ) + noiseSeed
                ) - (.1 * float(i)) + (.5 * u_color_blending);

                noise = clamp(noise, minNoise, maxNoise + float(i) * 0.02);
                color = mix(color, u_colors[i].color, smoothstep(0.0, u_color_blending, noise));
            }
        }
    }

    v_color = color;

    // 4. FRESNEL (rim glow)
    // (Calculated in fragment shader using displacement slope approximation)

    // 5. VERTEX POSITION
    vec3 newPosition = position + normal * v_displacement_amount * u_wave_amplitude;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    v_new_position = gl_Position;
}
`,o=`float random(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453);
}

float fbm(vec3 x) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    for (int i = 0; i < 4; i++) {
        value += amplitude * snoise(x * frequency);
        frequency *= 2.0;
        amplitude *= 0.5;
    }
    return value;
}

// Branchless HSL to RGB for iridescence
vec3 hsl2rgb(float h, float s, float l) {
    vec3 rgb = clamp(abs(mod(h * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
    return l + s * (rgb - 0.5) * (1.0 - abs(2.0 * l - 1.0));
}

void main() {
    vec2 finalUv = vFlowUv;
    
    vec3 baseColor;

    if (u_enable_procedural_texture > 0.5) {
        vec2 ppp = -1.0 + 2.0 * finalUv;
        ppp += 0.1 * cos((1.5 * u_flow_scale) * ppp.yx + 1.1 * u_time + vec2(0.1, 1.1));
        ppp += 0.1 * cos((2.3 * u_flow_scale) * ppp.yx + 1.3 * u_time + vec2(3.2, 3.4));
        ppp += 0.1 * cos((2.2 * u_flow_scale) * ppp.yx + 1.7 * u_time + vec2(1.8, 5.2));
        ppp += u_flow_distortion_a * cos((u_flow_distortion_b * u_flow_scale) * ppp.yx + 1.4 * u_time + vec2(6.3, 3.9));
        float r = length(ppp);
        
        float vx = (finalUv.x * u_texture_ease) + (r * (1.0 - u_texture_ease));
        float vy = (finalUv.y * u_texture_ease) + (0.0 * (1.0 - u_texture_ease));
        vec2 texUv = vec2(vx, vy);

        float parallaxFactor = 0.25;
        texUv.y -= (u_y_offset * u_y_offset_color_multiplier / u_plane_height) * parallaxFactor;
        texUv *= 1.5;

        vec4 texSample = texture2D(u_procedural_texture, texUv);
        baseColor = texSample.rgb;
    } else {
        baseColor = v_color;
    }

    vec3 color = baseColor;

    // === DOMAIN WARPING (simplified: 3 fbm calls instead of 5) ===
    if (u_domain_warp_enabled > 0.5) {
        vec3 p = vec3(finalUv * u_domain_warp_scale, u_time * 0.15);
        vec2 q = vec2(fbm(p), fbm(p + vec3(5.2, 1.3, 0.0)));
        float f = fbm(p + vec3(4.0 * q, 0.0));
        vec3 warpColor = color * (1.0 + f * 0.8 * u_domain_warp_intensity);
        float pattern = clamp(f * f * f + 0.6 * f * f + 0.5 * f, 0.0, 1.0);
        color = mix(color, warpColor * (0.6 + pattern * 0.8), u_domain_warp_intensity * 0.7);
    }

    // Post-processing
    color += v_displacement_amount * u_highlights;
    float shadowFactor = 1.0 - v_displacement_amount;
    color -= shadowFactor * shadowFactor * u_shadows;
    color = saturation(color, 1.0 + u_saturation);
    color = color * u_brightness;

    // === IRIDESCENCE ===
    if (u_iridescence_enabled > 0.5) {
        float hue = fract(v_displacement_amount * 0.5 + 0.5 + u_time * u_iridescence_speed * 0.05);
        vec3 iriColor = hsl2rgb(hue, 0.8, 0.6);
        color = mix(color, iriColor, u_iridescence_intensity * abs(v_displacement_amount) * 0.6);
    }

    // === FRESNEL (Rim glow) ===
    if (u_fresnel_enabled > 0.5) {
        float slope = 1.0 - abs(v_displacement_amount);
        float fresnel = pow(max(slope, 0.0), u_fresnel_power);
        color += u_fresnel_color * fresnel * u_fresnel_intensity;
    }

    // === VIGNETTE ===
    if (u_vignette_intensity > 0.0) {
        float dist = length(vUv - vec2(0.5));
        float vig = smoothstep(u_vignette_radius, u_vignette_radius * 0.3, dist);
        color *= mix(1.0, vig, u_vignette_intensity);
    }

    // === FAKE BLOOM ===
    if (u_bloom_intensity > 0.0) {
        float luma = dot(color, vec3(0.2126, 0.7152, 0.0722));
        float bloomMask = smoothstep(u_bloom_threshold, 1.0, luma);
        color += color * bloomMask * u_bloom_intensity;
    }

    // === CHROMATIC ABERRATION ===
    if (u_chromatic_aberration > 0.0) {
        float caAmount = u_chromatic_aberration * 0.008;
        float dist = length(vUv - vec2(0.5));
        float rShift = v_displacement_amount + caAmount * dist;
        float bShift = v_displacement_amount - caAmount * dist;
        color.r *= 1.0 + rShift * caAmount * 10.0;
        color.b *= 1.0 - bShift * caAmount * 10.0;
    }

    // Grain (use cheap hash noise instead of expensive fbm when static)
    float grain = 0.0;
    if (u_grain_intensity > 0.0) {
        vec2 noiseCoords = gl_FragCoord.xy / u_grain_scale;
        if (u_grain_speed != 0.0) {
            grain = fbm(vec3(noiseCoords, u_time * u_grain_speed));
        } else {
            // Static grain: use cheap hash instead of fbm
            grain = random(noiseCoords) - 0.5;
        }

        grain = grain * 0.5 + 0.5;
        grain -= 0.5;
        grain = (grain > u_grain_sparsity) ? grain : 0.0;
        grain *= u_grain_intensity;
    }

    color += vec3(grain);

    gl_FragColor = vec4(color, 1.0);
}
`;function s(){return`
// 1. REPLACEMENT PERMUTE: 
// Uses a hash function (fract/sin) instead of a modular lookup table.
vec4 permute(vec4 x) {
    return floor(fract(sin(x) * 43758.5453123) * 289.0);
}

// Taylor Inverse Sqrt
vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

// Fade function
vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

// 3D Simplex Noise
float snoise(vec3 v) {
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

  // First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

  // Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  // Permutations
  vec4 p = permute( permute( permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
          + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
          + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

  // Gradients
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

  // Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  // Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
}

// Classic Perlin noise
float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); 
  vec3 Pi1 = Pi0 + vec3(1.0); 
  
  vec3 Pf0 = fract(P); 
  vec3 Pf1 = Pf0 - vec3(1.0); 
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}
`}function n(){return`
vec3 saturation(vec3 rgb, float adjustment) {
    const vec3 W = vec3(0.2125, 0.7154, 0.0721);
    vec3 intensity = vec3(dot(rgb, W));
    return mix(intensity, rgb, adjustment);
}
`}class a{elements;constructor(){this.elements=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}translate(e,t,i){return this.elements[12]+=this.elements[0]*e+this.elements[4]*t+this.elements[8]*i,this.elements[13]+=this.elements[1]*e+this.elements[5]*t+this.elements[9]*i,this.elements[14]+=this.elements[2]*e+this.elements[6]*t+this.elements[10]*i,this.elements[15]+=this.elements[3]*e+this.elements[7]*t+this.elements[11]*i,this}rotateX(e){let t=Math.cos(e),i=Math.sin(e),r=this.elements[4],o=this.elements[5],s=this.elements[6],n=this.elements[7],a=this.elements[8],l=this.elements[9],u=this.elements[10],f=this.elements[11];return this.elements[4]=t*r+i*a,this.elements[5]=t*o+i*l,this.elements[6]=t*s+i*u,this.elements[7]=t*n+i*f,this.elements[8]=t*a-i*r,this.elements[9]=t*l-i*o,this.elements[10]=t*u-i*s,this.elements[11]=t*f-i*n,this}}class l{left;right;top;bottom;near;far;position;projectionMatrix;constructor(e,t,i,r,o,s){this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=o,this.far=s,this.position=[0,0,0],this.projectionMatrix=new a,this.updateProjectionMatrix()}updateProjectionMatrix(){let e=1/(this.right-this.left),t=1/(this.top-this.bottom),i=1/(this.far-this.near),r=(this.right+this.left)*e,o=(this.top+this.bottom)*t,s=(this.far+this.near)*i;this.projectionMatrix.elements=new Float32Array([2*e,0,0,0,0,2*t,0,0,0,0,-2*i,0,-r,-o,-s,1])}}function u(e,t,i,r=50,o=50){let s=t*i/1e6*r*o/1.5,n=t/i,a=Math.sqrt(s*n),l=-r/2,f=Math.min((l+a)/1.5,r/2),c=o/4,_=Math.max((c-s/a)/2,-o/4);n<1&&(l*=n,l*=1.05,f*=1.05*n,c*=1.05,_*=1.05),e.left=l,e.right=f,e.top=c,e.bottom=_,e.near=-100,e.far=1e3,e.updateProjectionMatrix()}console.info(`%c\u{1F308} Neat Gradients%c

Licensed under MIT + The Commons Clause.
Free for personal and commercial use.
Selling this software or its derivatives is strictly prohibited.
https://neat.firecms.co`,"font-weight: bold; font-size: 14px; color: #FF5772;","color: inherit;");let f=function(e=6){let t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i="";for(let r=0;r<e;r++){let e=Math.floor(Math.random()*t.length);i+=t.charAt(e)}return i}();class c{_ref;_speed=-1;_horizontalPressure=-1;_verticalPressure=-1;_waveFrequencyX=-1;_waveFrequencyY=-1;_waveAmplitude=-1;_shadows=-1;_highlights=-1;_saturation=-1;_brightness=-1;_grainScale=-1;_grainIntensity=-1;_grainSparsity=-1;_grainSpeed=-1;_colorBlending=-1;_colors=[];_wireframe=!1;_backgroundColor="#FFFFFF";_backgroundColorRgb=[1,1,1];_backgroundAlpha=1;_flowDistortionA=0;_flowDistortionB=0;_flowScale=1;_flowEase=0;_flowEnabled=!0;glState;_enableProceduralTexture=!1;_textureVoidLikelihood=.45;_textureVoidWidthMin=200;_textureVoidWidthMax=486;_textureBandDensity=2.15;_textureColorBlending=.01;_textureSeed=333;_textureEase=.5;_domainWarpEnabled=!1;_domainWarpIntensity=.5;_domainWarpScale=1;_vignetteIntensity=.5;_vignetteRadius=.8;_fresnelEnabled=!1;_fresnelPower=2;_fresnelIntensity=.5;_fresnelColor="#FFFFFF";_fresnelColorRgb=[1,1,1];_iridescenceEnabled=!1;_iridescenceIntensity=.5;_iridescenceSpeed=1;_bloomIntensity=0;_bloomThreshold=.7;_chromaticAberration=0;_proceduralTexture=null;_proceduralBackgroundColor="#000000";_textureShapeTriangles=20;_textureShapeCircles=15;_textureShapeBars=15;_textureShapeSquiggles=10;requestRef=-1;sizeObserver;_initialized=!1;_linkElement=null;_cachedColorRgb=[];_yOffset=0;_yOffsetWaveMultiplier=.004;_yOffsetColorMultiplier=.004;_yOffsetFlowMultiplier=.004;_resizeTimeoutId=null;_textureNeedsUpdate=!1;_linkCheckCounter=0;_colorsChanged=!0;_uniformsDirty=!0;_textureDirty=!0;constructor(e){const{ref:t,speed:i=4,horizontalPressure:r=3,verticalPressure:o=3,waveFrequencyX:s=5,waveFrequencyY:n=5,waveAmplitude:a=3,colors:l,highlights:f=4,shadows:c=4,colorSaturation:_=0,colorBrightness:h=1,colorBlending:m=5,grainScale:p=2,grainIntensity:g=.55,grainSparsity:x=0,grainSpeed:y=.1,wireframe:v=!1,backgroundColor:b="#FFFFFF",backgroundAlpha:w=1,resolution:E=1,seed:S,yOffset:T=0,yOffsetWaveMultiplier:R=4,yOffsetColorMultiplier:A=4,yOffsetFlowMultiplier:C=4,flowDistortionA:F=0,flowDistortionB:D=0,flowScale:P=1,flowEase:M=0,flowEnabled:I=!0,enableProceduralTexture:N=!1,textureVoidLikelihood:z=.45,textureVoidWidthMin:U=200,textureVoidWidthMax:B=486,textureBandDensity:k=2.15,textureColorBlending:O=.01,textureSeed:L=333,textureEase:j=.5,proceduralBackgroundColor:W="#000000",textureShapeTriangles:q=20,textureShapeCircles:V=15,textureShapeBars:X=15,textureShapeSquiggles:G=10,domainWarpEnabled:Y=!1,domainWarpIntensity:H=.5,domainWarpScale:$=1,vignetteIntensity:K=.5,vignetteRadius:Z=.8,fresnelEnabled:J=!1,fresnelPower:Q=2,fresnelIntensity:ee=.5,fresnelColor:et="#FFFFFF",iridescenceEnabled:ei=!1,iridescenceIntensity:er=.5,iridescenceSpeed:eo=1,bloomIntensity:es=0,bloomThreshold:en=.7,chromaticAberration:ea=0}=e;this._ref=t,this.destroy=this.destroy.bind(this),this._initScene=this._initScene.bind(this),this.speed=i,this.horizontalPressure=r,this.verticalPressure=o,this.waveFrequencyX=s,this.waveFrequencyY=n,this.waveAmplitude=a,this.colorBlending=m,this.grainScale=p,this.grainIntensity=g,this.grainSparsity=x,this.grainSpeed=y,this.colors=l,this.shadows=c,this.highlights=f,this.colorSaturation=_,this.colorBrightness=h,this.wireframe=v,this.backgroundColor=b,this.backgroundAlpha=w,this.yOffset=T,this.yOffsetWaveMultiplier=R,this.yOffsetColorMultiplier=A,this.yOffsetFlowMultiplier=C,this.flowDistortionA=F,this.flowDistortionB=D,this.flowScale=P,this.flowEase=M,this.flowEnabled=I,this.enableProceduralTexture=N,this.textureVoidLikelihood=z,this.textureVoidWidthMin=U,this.textureVoidWidthMax=B,this.textureBandDensity=k,this.textureColorBlending=O,this.textureSeed=L,this.textureEase=j,this._proceduralBackgroundColor=W,this._textureShapeTriangles=q,this._textureShapeCircles=V,this._textureShapeBars=X,this._textureShapeSquiggles=G,this.domainWarpEnabled=Y,this.domainWarpIntensity=H,this.domainWarpScale=$,this.vignetteIntensity=K,this.vignetteRadius=Z,this.fresnelEnabled=J,this.fresnelPower=Q,this.fresnelIntensity=ee,this.fresnelColor=et,this.iridescenceEnabled=ei,this.iridescenceIntensity=er,this.iridescenceSpeed=eo,this.bloomIntensity=es,this.bloomThreshold=en,this.chromaticAberration=ea,this.glState=this._initScene(E),function(){if(document.getElementById("neat-seo-schema"))return;let e=document.createElement("script");e.id="neat-seo-schema",e.type="application/ld+json",e.text=JSON.stringify({"@context":"https://schema.org","@type":"WebSite",name:"NEAT Gradient",url:"https://neat.firecms.co",author:{"@type":"Organization",name:"FireCMS",url:"https://firecms.co"},description:"Beautiful, fast, heavily customizable, WebGL based gradients."}),document.head.appendChild(e);let t=document.createElement("div");t.style.position="absolute",t.style.width="1px",t.style.height="1px",t.style.padding="0",t.style.margin="-1px",t.style.overflow="hidden",t.style.clip="rect(0, 0, 0, 0)",t.style.whiteSpace="nowrap",t.style.borderWidth="0";try{let e=t.attachShadow({mode:"closed"}),i=document.createElement("a");i.href="https://firecms.co",i.textContent="FireCMS",e.appendChild(i)}catch{let e=document.createElement("a");e.href="https://firecms.co",e.textContent="FireCMS",t.appendChild(e)}document.body.appendChild(t)}();let el=void 0!==S?S:function(){let e=new Date;return 60*e.getMinutes()+e.getSeconds()}(),eu=performance.now();const ef=()=>{let{gl:e,program:i,locations:r,indexCount:o,indexType:s}=this.glState;if(this._linkCheckCounter++,this._linkCheckCounter>=300&&(this._linkCheckCounter=0,this._linkElement&&document.contains(this._linkElement)||(this._linkElement=d(t))),this._initialized){let t=performance.now();if(el+=(t-eu)/1e3*this._speed,eu=t,e.useProgram(i),e.uniform1f(r.uniforms.u_time,el),this._uniformsDirty&&(e.uniform2f(r.uniforms.u_resolution,this._ref.clientWidth,this._ref.clientHeight),e.uniform2f(r.uniforms.u_color_pressure,this._horizontalPressure,this._verticalPressure),e.uniform1f(r.uniforms.u_wave_frequency_x,this._waveFrequencyX),e.uniform1f(r.uniforms.u_wave_frequency_y,this._waveFrequencyY),e.uniform1f(r.uniforms.u_wave_amplitude,this._waveAmplitude),e.uniform1f(r.uniforms.u_color_blending,this._colorBlending),e.uniform1f(r.uniforms.u_shadows,this._shadows),e.uniform1f(r.uniforms.u_highlights,this._highlights),e.uniform1f(r.uniforms.u_saturation,this._saturation),e.uniform1f(r.uniforms.u_brightness,this._brightness),e.uniform1f(r.uniforms.u_grain_intensity,this._grainIntensity),e.uniform1f(r.uniforms.u_grain_sparsity,this._grainSparsity),e.uniform1f(r.uniforms.u_grain_speed,this._grainSpeed),e.uniform1f(r.uniforms.u_grain_scale,this._grainScale),e.uniform1f(r.uniforms.u_y_offset,this._yOffset),e.uniform1f(r.uniforms.u_y_offset_wave_multiplier,this._yOffsetWaveMultiplier),e.uniform1f(r.uniforms.u_y_offset_color_multiplier,this._yOffsetColorMultiplier),e.uniform1f(r.uniforms.u_y_offset_flow_multiplier,this._yOffsetFlowMultiplier),e.uniform1f(r.uniforms.u_flow_distortion_a,this._flowDistortionA),e.uniform1f(r.uniforms.u_flow_distortion_b,this._flowDistortionB),e.uniform1f(r.uniforms.u_flow_scale,this._flowScale),e.uniform1f(r.uniforms.u_flow_ease,this._flowEase),e.uniform1f(r.uniforms.u_flow_enabled,+!!this._flowEnabled),e.uniform1f(r.uniforms.u_enable_procedural_texture,+!!this._enableProceduralTexture),e.uniform1f(r.uniforms.u_texture_ease,this._textureEase),e.uniform1f(r.uniforms.u_domain_warp_enabled,+!!this._domainWarpEnabled),e.uniform1f(r.uniforms.u_domain_warp_intensity,this._domainWarpIntensity),e.uniform1f(r.uniforms.u_domain_warp_scale,this._domainWarpScale),e.uniform1f(r.uniforms.u_vignette_intensity,this._vignetteIntensity),e.uniform1f(r.uniforms.u_vignette_radius,this._vignetteRadius),e.uniform1f(r.uniforms.u_fresnel_enabled,+!!this._fresnelEnabled),e.uniform1f(r.uniforms.u_fresnel_power,this._fresnelPower),e.uniform1f(r.uniforms.u_fresnel_intensity,this._fresnelIntensity),e.uniform3fv(r.uniforms.u_fresnel_color,this._fresnelColorRgb),e.uniform1f(r.uniforms.u_iridescence_enabled,+!!this._iridescenceEnabled),e.uniform1f(r.uniforms.u_iridescence_intensity,this._iridescenceIntensity),e.uniform1f(r.uniforms.u_iridescence_speed,this._iridescenceSpeed),e.uniform1f(r.uniforms.u_bloom_intensity,this._bloomIntensity),e.uniform1f(r.uniforms.u_bloom_threshold,this._bloomThreshold),e.uniform1f(r.uniforms.u_chromatic_aberration,this._chromaticAberration),this._uniformsDirty=!1),this._textureNeedsUpdate&&this._enableProceduralTexture&&(this._proceduralTexture&&e.deleteTexture(this._proceduralTexture),this._proceduralTexture=this._createProceduralTexture(e),this._textureNeedsUpdate=!1,this._textureDirty=!0),this._textureDirty&&this._proceduralTexture&&(e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,this._proceduralTexture),e.uniform1i(r.uniforms.u_procedural_texture,1),this._textureDirty=!1),this._colorsChanged){this._colorsChanged=!1;for(let t=0;t<6;t++)if(t<this._colors.length){let i=this._colors[t],o=this._cachedColorRgb[t]||[0,0,0];e.uniform1f(r.uniforms[`u_colors[${t}].is_active`],+!!i.enabled),e.uniform3fv(r.uniforms[`u_colors[${t}].color`],o),e.uniform1f(r.uniforms[`u_colors[${t}].influence`],i.influence||0)}else e.uniform1f(r.uniforms[`u_colors[${t}].is_active`],0);e.uniform1i(r.uniforms.u_colors_count,6)}}e.clearColor(this._backgroundColorRgb[0],this._backgroundColorRgb[1],this._backgroundColorRgb[2],this._backgroundAlpha),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),this._wireframe?(e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,this.glState.buffers.wireframeIndex),e.drawElements(e.LINES,this.glState.wireframeIndexCount,s,0),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,this.glState.buffers.index)):e.drawElements(e.TRIANGLES,o,s,0),this.requestRef=requestAnimationFrame(ef)},ec=()=>{let{gl:e,camera:t}=this.glState,i=this._ref.clientWidth,r=this._ref.clientHeight;this._ref.width=i,this._ref.height=r,e.viewport(0,0,i,r),u(t,i,r);let o=e.getUniformLocation(this.glState.program,"projectionMatrix");e.useProgram(this.glState.program),e.uniformMatrix4fv(o,!1,t.projectionMatrix.elements)};this.sizeObserver=new ResizeObserver(()=>{null!==this._resizeTimeoutId&&clearTimeout(this._resizeTimeoutId),this._resizeTimeoutId=window.setTimeout(()=>{ec(),this._resizeTimeoutId=null},100)}),this.sizeObserver.observe(t),ef()}destroy(){if(cancelAnimationFrame(this.requestRef),this.sizeObserver.disconnect(),null!==this._resizeTimeoutId&&(clearTimeout(this._resizeTimeoutId),this._resizeTimeoutId=null),this._linkElement&&this._linkElement.parentElement&&(this._linkElement.parentElement.removeChild(this._linkElement),this._linkElement=null),this.glState){let e=this.glState.gl;e.deleteProgram(this.glState.program),e.deleteBuffer(this.glState.buffers.position),e.deleteBuffer(this.glState.buffers.normal),e.deleteBuffer(this.glState.buffers.uv),e.deleteBuffer(this.glState.buffers.index),e.deleteBuffer(this.glState.buffers.wireframeIndex)}this._proceduralTexture&&this.glState&&this.glState.gl.deleteTexture(this._proceduralTexture)}downloadAsPNG(e="neat.png"){var t,i;let r;t=this._ref.toDataURL("image/png"),i=e,(r=document.createElement("a")).download=i,r.href=t,document.body.appendChild(r),r.click(),document.body.removeChild(r)}set speed(e){this._uniformsDirty=!0,this._speed=e/20}set horizontalPressure(e){this._uniformsDirty=!0,this._horizontalPressure=e/4}set verticalPressure(e){this._uniformsDirty=!0,this._verticalPressure=e/4}set waveFrequencyX(e){this._uniformsDirty=!0,this._waveFrequencyX=.04*e}set waveFrequencyY(e){this._uniformsDirty=!0,this._waveFrequencyY=.04*e}set waveAmplitude(e){this._uniformsDirty=!0,this._waveAmplitude=.75*e}set colors(e){this._uniformsDirty=!0,this._colors=e,this._cachedColorRgb=e.map(e=>this._hexToRgb(e.color)),this._colorsChanged=!0}set highlights(e){this._uniformsDirty=!0,this._highlights=e/100}set shadows(e){this._uniformsDirty=!0,this._shadows=e/100}set colorSaturation(e){this._uniformsDirty=!0,this._saturation=e/10}set colorBrightness(e){this._uniformsDirty=!0,this._brightness=e}set colorBlending(e){this._uniformsDirty=!0,this._colorBlending=e/10}set grainScale(e){this._uniformsDirty=!0,this._grainScale=0==e?1:e}set grainIntensity(e){this._uniformsDirty=!0,this._grainIntensity=e}set grainSparsity(e){this._uniformsDirty=!0,this._grainSparsity=e}set grainSpeed(e){this._uniformsDirty=!0,this._grainSpeed=e}set wireframe(e){this._uniformsDirty=!0,this._wireframe=e}set resolution(e){if(this._uniformsDirty=!0,this.glState){let e=this.glState.gl;e.deleteProgram(this.glState.program),e.deleteBuffer(this.glState.buffers.position),e.deleteBuffer(this.glState.buffers.normal),e.deleteBuffer(this.glState.buffers.uv),e.deleteBuffer(this.glState.buffers.index),e.deleteBuffer(this.glState.buffers.wireframeIndex)}this.glState=this._initScene(e)}set backgroundColor(e){this._uniformsDirty=!0,this._backgroundColor=e,this._backgroundColorRgb=this._hexToRgb(e)}set backgroundAlpha(e){this._uniformsDirty=!0,this._backgroundAlpha=e}set yOffset(e){this._uniformsDirty=!0,this._yOffset=e}get yOffsetWaveMultiplier(){return 1e3*this._yOffsetWaveMultiplier}set yOffsetWaveMultiplier(e){this._uniformsDirty=!0,this._yOffsetWaveMultiplier=e/1e3}get yOffsetColorMultiplier(){return 1e3*this._yOffsetColorMultiplier}set yOffsetColorMultiplier(e){this._uniformsDirty=!0,this._yOffsetColorMultiplier=e/1e3}get yOffsetFlowMultiplier(){return 1e3*this._yOffsetFlowMultiplier}set yOffsetFlowMultiplier(e){this._uniformsDirty=!0,this._yOffsetFlowMultiplier=e/1e3}set flowDistortionA(e){this._uniformsDirty=!0,this._flowDistortionA=e}set flowDistortionB(e){this._uniformsDirty=!0,this._flowDistortionB=e}set flowScale(e){this._uniformsDirty=!0,this._flowScale=e}set flowEase(e){this._uniformsDirty=!0,this._flowEase=e}set flowEnabled(e){this._uniformsDirty=!0,this._flowEnabled=e}get flowEnabled(){return this._flowEnabled}set enableProceduralTexture(e){this._uniformsDirty=!0,this._enableProceduralTexture=e,e&&!this._proceduralTexture&&(this._textureNeedsUpdate=!0)}set textureVoidLikelihood(e){this._uniformsDirty=!0,this._textureVoidLikelihood=e,this._enableProceduralTexture&&(this._textureNeedsUpdate=!0)}set textureVoidWidthMin(e){this._uniformsDirty=!0,this._textureVoidWidthMin=e,this._enableProceduralTexture&&(this._textureNeedsUpdate=!0)}set textureVoidWidthMax(e){this._uniformsDirty=!0,this._textureVoidWidthMax=e,this._enableProceduralTexture&&(this._textureNeedsUpdate=!0)}set textureBandDensity(e){this._uniformsDirty=!0,this._textureBandDensity=e,this._enableProceduralTexture&&(this._textureNeedsUpdate=!0)}set textureColorBlending(e){this._uniformsDirty=!0,this._textureColorBlending=e,this._enableProceduralTexture&&(this._textureNeedsUpdate=!0)}set textureSeed(e){this._uniformsDirty=!0,this._textureSeed=e,this._enableProceduralTexture&&(this._textureNeedsUpdate=!0)}get textureEase(){return this._textureEase}set textureEase(e){this._uniformsDirty=!0,this._textureEase=e}set proceduralBackgroundColor(e){this._uniformsDirty=!0,this._proceduralBackgroundColor=e,this._enableProceduralTexture&&(this._textureNeedsUpdate=!0)}set textureShapeTriangles(e){this._uniformsDirty=!0,this._textureShapeTriangles=e,this._enableProceduralTexture&&(this._textureNeedsUpdate=!0)}set textureShapeCircles(e){this._uniformsDirty=!0,this._textureShapeCircles=e,this._enableProceduralTexture&&(this._textureNeedsUpdate=!0)}set textureShapeBars(e){this._uniformsDirty=!0,this._textureShapeBars=e,this._enableProceduralTexture&&(this._textureNeedsUpdate=!0)}set textureShapeSquiggles(e){this._uniformsDirty=!0,this._textureShapeSquiggles=e,this._enableProceduralTexture&&(this._textureNeedsUpdate=!0)}_hexToRgb(e){let t=parseInt(e.replace("#",""),16);return[(t>>16&255)/255,(t>>8&255)/255,(255&t)/255]}_initScene(e){let t=this._ref.clientWidth,i=this._ref.clientHeight,f=this._ref.getContext("webgl2",{alpha:!0,preserveDrawingBuffer:!0,antialias:!0})||this._ref.getContext("webgl",{alpha:!0,preserveDrawingBuffer:!0,antialias:!0});if(!f)throw Error("WebGL not supported");f.getExtension("OES_standard_derivatives"),f.getExtension("OES_element_index_uint"),f.viewport(0,0,t,i);let{position:c,normal:_,uv:d,index:h,wireframeIndex:m}=function(e,t){let i=Math.floor(e),r=Math.floor(t),o=i+1,s=r+1,n=50/i,a=80/r,l=[],u=[],f=[],c=[];for(let e=0;e<s;e++){let t=e*a-40;for(let s=0;s<o;s++){let o=s*n-25;u.push(o,-t,0),f.push(0,0,1),c.push(s/i),c.push(1-e/r)}}for(let e=0;e<r;e++)for(let t=0;t<i;t++){let i=t+o*e,r=t+o*(e+1),s=t+1+o*(e+1),n=t+1+o*e;l.push(i,r,n),l.push(r,s,n)}let _=u.length/3>65535,d=[];for(let e=0;e<l.length;e+=3){let t=l[e],i=l[e+1],r=l[e+2];d.push(t,i,i,r,r,t)}return{position:new Float32Array(u),normal:new Float32Array(f),uv:new Float32Array(c),index:_?new Uint32Array(l):new Uint16Array(l),wireframeIndex:_?new Uint32Array(d):new Uint16Array(d)}}(240*e,240*e),p=f.createBuffer();f.bindBuffer(f.ARRAY_BUFFER,p),f.bufferData(f.ARRAY_BUFFER,c,f.STATIC_DRAW);let g=f.createBuffer();f.bindBuffer(f.ARRAY_BUFFER,g),f.bufferData(f.ARRAY_BUFFER,_,f.STATIC_DRAW);let x=f.createBuffer();f.bindBuffer(f.ARRAY_BUFFER,x),f.bufferData(f.ARRAY_BUFFER,d,f.STATIC_DRAW);let y=f.createBuffer();f.bindBuffer(f.ELEMENT_ARRAY_BUFFER,y),f.bufferData(f.ELEMENT_ARRAY_BUFFER,h,f.STATIC_DRAW);let v=f.createBuffer();f.bindBuffer(f.ELEMENT_ARRAY_BUFFER,v),f.bufferData(f.ELEMENT_ARRAY_BUFFER,m,f.STATIC_DRAW),f.bindBuffer(f.ELEMENT_ARRAY_BUFFER,y);let b=`precision highp float;

attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

varying vec2 vUv;
varying vec2 vFlowUv;
varying vec4 v_new_position;
varying vec3 v_color;
varying float v_displacement_amount;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_color_pressure;
uniform float u_wave_frequency_x;
uniform float u_wave_frequency_y;
uniform float u_wave_amplitude;
uniform float u_plane_width;
uniform float u_plane_height;
uniform float u_color_blending;

uniform int u_colors_count;
struct ColorStop {
    float is_active;
    vec3 color;
    float influence;
};
uniform ColorStop u_colors[6];

uniform float u_y_offset;
uniform float u_y_offset_wave_multiplier;
uniform float u_y_offset_color_multiplier;
uniform float u_y_offset_flow_multiplier;

// Flow field uniforms
uniform float u_flow_distortion_a;
uniform float u_flow_distortion_b;
uniform float u_flow_scale;
uniform float u_flow_ease;
uniform float u_flow_enabled;

// Fresnel uniforms
uniform float u_fresnel_enabled;
uniform float u_fresnel_power;
uniform float u_fresnel_intensity;
uniform vec3 u_fresnel_color;

`+s()+`
`+n()+`
`+r,w=f.createShader(f.VERTEX_SHADER);f.shaderSource(w,b),f.compileShader(w),f.getShaderParameter(w,f.COMPILE_STATUS)||(console.log("VERTEX_SHADER_ERROR_START"),console.log("Vertex shader error: ",f.getShaderInfoLog(w)),console.log("GL Error Code:",f.getError()),console.log("Vertex Shader Source Dump:"),console.log(b.split(`
`).map((e,t)=>`${t+1}: ${e}`).join(`
`)),console.log("VERTEX_SHADER_ERROR_END"));let E=`precision highp float;

varying vec2 vUv;
varying vec2 vFlowUv;
varying vec3 v_color;
varying float v_displacement_amount;

uniform float u_time;
uniform vec2 u_resolution;
uniform float u_plane_height;

uniform float u_shadows;
uniform float u_highlights;
uniform float u_saturation;
uniform float u_brightness;
uniform float u_grain_intensity; 
uniform float u_grain_sparsity; 
uniform float u_grain_scale; 
uniform float u_grain_speed; 

uniform float u_y_offset;
uniform float u_y_offset_color_multiplier;

// Flow field uniforms
uniform float u_flow_distortion_a;
uniform float u_flow_distortion_b;
uniform float u_flow_scale;

// Procedural texture uniforms
uniform sampler2D u_procedural_texture;
uniform float u_enable_procedural_texture;
uniform float u_texture_ease;

// Domain warping uniforms
uniform float u_domain_warp_enabled;
uniform float u_domain_warp_intensity;
uniform float u_domain_warp_scale;

// Vignette uniforms
uniform float u_vignette_intensity;
uniform float u_vignette_radius;

// Fresnel uniforms (fragment side)
uniform float u_fresnel_enabled;
uniform float u_fresnel_power;
uniform float u_fresnel_intensity;
uniform vec3 u_fresnel_color;



// Iridescence uniforms
uniform float u_iridescence_enabled;
uniform float u_iridescence_intensity;
uniform float u_iridescence_speed;

// Bloom uniforms
uniform float u_bloom_intensity;
uniform float u_bloom_threshold;

// Chromatic aberration
uniform float u_chromatic_aberration;

`+n()+`
`+s()+`
`+o,S=f.createShader(f.FRAGMENT_SHADER);f.shaderSource(S,E),f.compileShader(S),f.getShaderParameter(S,f.COMPILE_STATUS)||(console.log("FRAGMENT_SHADER_ERROR_START"),console.log("Fragment shader error: ",f.getShaderInfoLog(S)),console.log("GL Error Code:",f.getError()),console.log("Fragment Shader Source Dump:"),console.log(E.split(`
`).map((e,t)=>`${t+1}: ${e}`).join(`
`)),console.log("FRAGMENT_SHADER_ERROR_END"));let T=f.createProgram();f.attachShader(T,w),f.attachShader(T,S),f.linkProgram(T),f.getProgramParameter(T,f.LINK_STATUS)||(console.log("PROGRAM_LINK_ERROR_START"),console.log("Program linking error: ",f.getProgramInfoLog(T)),console.log("GL Error Code:",f.getError()),console.log("PROGRAM_LINK_ERROR_END")),f.useProgram(T);let R=new l(0,0,0,0,0,1e3);R.position=[0,0,5],u(R,t,i);let A=f.getAttribLocation(T,"position"),C=f.getAttribLocation(T,"normal"),F=f.getAttribLocation(T,"uv");f.enableVertexAttribArray(A),f.bindBuffer(f.ARRAY_BUFFER,p),f.vertexAttribPointer(A,3,f.FLOAT,!1,0,0),f.enableVertexAttribArray(C),f.bindBuffer(f.ARRAY_BUFFER,g),f.vertexAttribPointer(C,3,f.FLOAT,!1,0,0),f.enableVertexAttribArray(F),f.bindBuffer(f.ARRAY_BUFFER,x),f.vertexAttribPointer(F,2,f.FLOAT,!1,0,0),f.bindBuffer(f.ELEMENT_ARRAY_BUFFER,y);let D=new a;D.translate(-R.position[0],-R.position[1],-R.position[2]),D.translate(0,0,-1),D.rotateX(-Math.PI/3.5);let P=f.getUniformLocation(T,"modelViewMatrix");f.uniformMatrix4fv(P,!1,D.elements);let M=f.getUniformLocation(T,"projectionMatrix");f.uniformMatrix4fv(M,!1,R.projectionMatrix.elements);let I=f.getUniformLocation(T,"u_plane_width");f.uniform1f(I,50);let N=f.getUniformLocation(T,"u_plane_height");f.uniform1f(N,80);let z=f.getUniformLocation(T,"u_colors_count");f.uniform1i(z,6);let U={attributes:{position:A,normal:C,uv:F},uniforms:{}};["u_time","u_resolution","u_color_pressure","u_wave_frequency_x","u_wave_frequency_y","u_wave_amplitude","u_colors_count","u_plane_width","u_plane_height","u_shadows","u_highlights","u_grain_intensity","u_grain_sparsity","u_grain_scale","u_grain_speed","u_flow_distortion_a","u_flow_distortion_b","u_flow_scale","u_flow_ease","u_flow_enabled","u_y_offset","u_y_offset_wave_multiplier","u_y_offset_color_multiplier","u_y_offset_flow_multiplier","u_procedural_texture","u_enable_procedural_texture","u_texture_ease","u_saturation","u_brightness","u_color_blending","u_domain_warp_enabled","u_domain_warp_intensity","u_domain_warp_scale","u_vignette_intensity","u_vignette_radius","u_fresnel_enabled","u_fresnel_power","u_fresnel_intensity","u_fresnel_color","u_iridescence_enabled","u_iridescence_intensity","u_iridescence_speed","u_bloom_intensity","u_bloom_threshold","u_chromatic_aberration"].forEach(e=>{U.uniforms[e]=f.getUniformLocation(T,e)});for(let e=0;e<6;e++)U.uniforms[`u_colors[${e}].is_active`]=f.getUniformLocation(T,`u_colors[${e}].is_active`),U.uniforms[`u_colors[${e}].color`]=f.getUniformLocation(T,`u_colors[${e}].color`),U.uniforms[`u_colors[${e}].influence`]=f.getUniformLocation(T,`u_colors[${e}].influence`);return this._initialized=!0,this._uniformsDirty=!0,this._colorsChanged=!0,this._textureDirty=!0,f.enable(f.BLEND),f.blendFunc(f.SRC_ALPHA,f.ONE_MINUS_SRC_ALPHA),f.enable(f.DEPTH_TEST),{gl:f,program:T,buffers:{position:p,normal:g,uv:x,index:y,wireframeIndex:v},locations:U,camera:R,indexCount:h.length,wireframeIndexCount:m.length,indexType:h instanceof Uint32Array?f.UNSIGNED_INT:f.UNSIGNED_SHORT}}_createProceduralTexture(e){let t=document.createElement("canvas");t.width=1024,t.height=1024;let i=t.getContext("2d",{willReadFrequently:!0});if(!i)return null;let r=this._textureSeed,o=this._textureSeed;function s(){let e=1e4*Math.sin(r++);return e-Math.floor(e)}let n=this._colors.filter(e=>e.enabled).map(e=>e.color);if(0===n.length)return null;function a(e){let t=parseInt(e.replace("#",""),16);return{r:t>>16&255,g:t>>8&255,b:255&t}}let l=()=>{let e=n[Math.floor(s()*n.length)],t=n[Math.floor(s()*n.length)],i=s()*this._textureColorBlending,r=a(e),o=a(t);return"#"+(0x1000000+(Math.round(r.r+(o.r-r.r)*i)<<16)+(Math.round(r.g+(o.g-r.g)*i)<<8)+Math.round(r.b+(o.b-r.b)*i)).toString(16).slice(1).padStart(6,"0")},u=this._proceduralBackgroundColor||"#000000";i.fillStyle=u,i.fillRect(0,0,1024,1024);let f=i.createLinearGradient(0,0,0,1024);f.addColorStop(0,l()),f.addColorStop(1,l()),i.fillStyle=f,i.fillRect(0,0,1024,1024);for(let e=0;e<this._textureShapeTriangles;e++){i.fillStyle=l(),i.beginPath();let e=1024*s(),t=1024*s(),r=100+300*s();i.moveTo(e,t),i.lineTo(e+(s()-.5)*r,t+(s()-.5)*r),i.lineTo(e+(s()-.5)*r,t+(s()-.5)*r),i.fill()}for(let e=0;e<this._textureShapeCircles;e++){i.strokeStyle=l(),i.lineWidth=10+50*s(),i.beginPath();let e=1024*s(),t=1024*s(),r=50+150*s();i.arc(e,t,r,0,2*Math.PI),i.stroke()}for(let e=0;e<this._textureShapeBars;e++)i.fillStyle=l(),i.save(),i.translate(1024*s(),1024*s()),i.rotate(s()*Math.PI),i.fillRect(-150,-25,300,50),i.restore();i.lineWidth=15,i.lineCap="round";for(let e=0;e<this._textureShapeSquiggles;e++){i.strokeStyle=l(),i.beginPath();let e=1024*s(),t=1024*s();i.moveTo(e,t);for(let r=0;r<4;r++)i.bezierCurveTo(e+(s()-.5)*300,t+(s()-.5)*300,e+(s()-.5)*300,t+(s()-.5)*300,e+(s()-.5)*300,t+(s()-.5)*300),e+=(s()-.5)*300,t+=(s()-.5)*300;i.stroke()}r=o+5e4;let c=document.createElement("canvas");c.width=1024,c.height=1024;let _=c.getContext("2d",{willReadFrequently:!0});if(!_)return null;_.fillStyle=u,_.fillRect(0,0,1024,1024);let d=0,h=[];for(;d<1024;)if(s()<this._textureVoidLikelihood){let e=this._textureVoidWidthMin+s()*(this._textureVoidWidthMax-this._textureVoidWidthMin);h.push({type:"void",x:d,width:e}),d+=e}else{let e=50+200*s();h.push({type:"matter",x:d,width:e}),d+=e}for(let e of h)if("matter"===e.type){let i=e.x,r=Math.min(e.x+e.width,1024),o=i;for(;o<r;){let e=(2+20*s())/this._textureBandDensity,i=Math.floor(1024*s());_.drawImage(t,i,0,e,1024,o,0,e,1024),o+=e}}let m=e.createTexture();e.bindTexture(e.TEXTURE_2D,m),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,c),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.REPEAT),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.generateMipmap(e.TEXTURE_2D);let p=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");if(p){let t=e.getParameter(p.MAX_TEXTURE_MAX_ANISOTROPY_EXT);e.texParameterf(e.TEXTURE_2D,p.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(16,t))}return m}set domainWarpEnabled(e){this._domainWarpEnabled!==e&&(this._domainWarpEnabled=e,this._uniformsDirty=!0)}set domainWarpIntensity(e){this._domainWarpIntensity!==e&&(this._domainWarpIntensity=e,this._uniformsDirty=!0)}set domainWarpScale(e){this._domainWarpScale!==e&&(this._domainWarpScale=e,this._uniformsDirty=!0)}set vignetteIntensity(e){this._vignetteIntensity!==e&&(this._vignetteIntensity=e,this._uniformsDirty=!0)}set vignetteRadius(e){this._vignetteRadius!==e&&(this._vignetteRadius=e,this._uniformsDirty=!0)}set fresnelEnabled(e){this._fresnelEnabled!==e&&(this._fresnelEnabled=e,this._uniformsDirty=!0)}set fresnelPower(e){this._fresnelPower!==e&&(this._fresnelPower=e,this._uniformsDirty=!0)}set fresnelIntensity(e){this._fresnelIntensity!==e&&(this._fresnelIntensity=e,this._uniformsDirty=!0)}set fresnelColor(e){this._fresnelColor!==e&&(this._fresnelColor=e,this._fresnelColorRgb=this._hexToRgb(e),this._uniformsDirty=!0)}set iridescenceEnabled(e){this._iridescenceEnabled!==e&&(this._iridescenceEnabled=e,this._uniformsDirty=!0)}set iridescenceIntensity(e){this._iridescenceIntensity!==e&&(this._iridescenceIntensity=e,this._uniformsDirty=!0)}set iridescenceSpeed(e){this._iridescenceSpeed!==e&&(this._iridescenceSpeed=e,this._uniformsDirty=!0)}set bloomIntensity(e){this._bloomIntensity!==e&&(this._bloomIntensity=e,this._uniformsDirty=!0)}set bloomThreshold(e){this._bloomThreshold!==e&&(this._bloomThreshold=e,this._uniformsDirty=!0)}set chromaticAberration(e){this._chromaticAberration!==e&&(this._chromaticAberration=e,this._uniformsDirty=!0)}}let _=e=>{e.id=f,e.href="https://neat.firecms.co",e.target="_blank",e.style.position="absolute",e.style.display="block",e.style.bottom="0",e.style.right="0",e.style.padding="10px",e.style.color="#dcdcdc",e.style.opacity="0.8",e.style.fontFamily="sans-serif",e.style.fontSize="16px",e.style.fontWeight="bold",e.style.textDecoration="none",e.style.zIndex="10000",e.style.pointerEvents="auto",e.setAttribute("data-n","1"),e.innerHTML="NEAT"},d=e=>{let t=e.parentElement;if(t&&"static"===getComputedStyle(t).position&&(t.style.position="relative"),t){let e=t.querySelector("a[data-n]");if(e)return _(e),e}let i=document.createElement("a");return _(i),t?.appendChild(i),i};var h=e.i(46932),m=e.i(70273),p=e.i(43432),g=e.i(46897),x=e.i(75254);let y=(0,x.default)("sparkles",[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]]),v=(0,x.default)("leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]),b=(0,x.default)("truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);var w=e.i(3116);function E({children:e,href:r,className:o="",onClick:s,type:n}){let a=(0,i.useRef)(null),l=e=>{let t=a.current;if(!t)return;let i=t.getBoundingClientRect(),r=e.clientX-i.left-i.width/2,o=e.clientY-i.top-i.height/2;t.style.transform=`translate(${.18*r}px, ${.25*o}px)`},u=()=>{a.current&&(a.current.style.transform="translate(0,0)")},f=(0,t.jsx)(h.motion.span,{whileTap:{scale:.96},className:"inline-flex items-center gap-2",children:e});return r?(0,t.jsx)("a",{ref:a,href:r,onMouseMove:l,onMouseLeave:u,onClick:s,className:`inline-flex items-center gap-2 transition-transform duration-200 ease-out will-change-transform ${o}`,children:f}):(0,t.jsx)("button",{ref:a,type:n??"button",onMouseMove:l,onMouseLeave:u,onClick:s,className:`inline-flex items-center gap-2 transition-transform duration-200 ease-out will-change-transform ${o}`,children:f})}e.s(["Hero",0,function(){let e=(0,i.useRef)(null);return(0,i.useEffect)(()=>{if(!e.current)return;let t=new c({ref:e.current,...{colors:[{color:"#0F7A45",enabled:!0},{color:"#14a35c",enabled:!0},{color:"#FF9F1A",enabled:!0},{color:"#ffb84d",enabled:!0},{color:"#f5e1e5",enabled:!1}],speed:6,horizontalPressure:7,verticalPressure:8,waveFrequencyX:1,waveFrequencyY:2,waveAmplitude:8,shadows:4,highlights:6,colorBrightness:.95,colorSaturation:-8,wireframe:!1,colorBlending:10,backgroundColor:"#0F7A45",backgroundAlpha:1,grainScale:4,grainSparsity:0,grainIntensity:.25,grainSpeed:1,resolution:1,yOffset:0,yOffsetWaveMultiplier:6.2,yOffsetColorMultiplier:5.8,yOffsetFlowMultiplier:6.5,flowDistortionA:1.1,flowDistortionB:.8,flowScale:1.6,flowEase:.32,flowEnabled:!0,enableProceduralTexture:!1,textureVoidLikelihood:.27,textureVoidWidthMin:60,textureVoidWidthMax:420,textureBandDensity:1.2,textureColorBlending:.06,textureSeed:333,textureEase:.22,proceduralBackgroundColor:"#0E0707",textureShapeTriangles:20,textureShapeCircles:15,textureShapeBars:15,textureShapeSquiggles:10,domainWarpEnabled:!1,domainWarpIntensity:0,domainWarpScale:3,vignetteIntensity:0,vignetteRadius:.8,fresnelEnabled:!1,fresnelPower:2,fresnelIntensity:.5,fresnelColor:"#FFFFFF",iridescenceEnabled:!1,iridescenceIntensity:.5,iridescenceSpeed:1,bloomIntensity:0,bloomThreshold:.7,chromaticAberration:0}}),i=()=>{t.yOffset=window.scrollY};return window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i),t.destroy()}},[]),(0,t.jsxs)("section",{id:"home",className:"relative min-h-svh overflow-hidden pt-28 pb-16 noise transition-colors duration-500 isolate",children:[(0,t.jsxs)("div",{className:"absolute inset-0 -z-10 overflow-hidden",children:[(0,t.jsx)("canvas",{ref:e,style:{width:"100%",height:"100%"},className:"absolute inset-0 opacity-100"}),(0,t.jsx)("div",{className:"absolute inset-0 bg-linear-to-b from-background/30 via-background/60 to-background dark:from-background/20 dark:via-background/50 dark:to-background pointer-events-none"}),(0,t.jsx)("div",{className:"absolute inset-0 bg-mesh opacity-40 pointer-events-none"}),(0,t.jsx)("div",{className:"orb animate-orb",style:{width:500,height:500,left:"-10%",top:"10%",background:"radial-gradient(circle, oklch(0.65 0.16 152 / 0.25), transparent 70%)"}}),(0,t.jsx)("div",{className:"orb animate-orb",style:{width:400,height:400,right:"-5%",bottom:"20%",background:"radial-gradient(circle, oklch(0.85 0.15 70 / 0.15), transparent 70%)",animationDelay:"4s"}})]}),(0,t.jsxs)("div",{className:"container mx-auto px-4 grid lg:grid-cols-12 gap-8 items-center min-h-[80svh] relative z-10",children:[(0,t.jsxs)("div",{className:"lg:col-span-7",children:[(0,t.jsxs)(h.motion.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"inline-flex items-center gap-2 glass-light dark:glass rounded-full px-4 py-2 text-xs md:text-sm font-medium mb-6 text-foreground border-primary/20",children:[(0,t.jsxs)("span",{className:"relative flex w-2 h-2",children:[(0,t.jsx)("span",{className:"absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping"}),(0,t.jsx)("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-primary"})]}),"Open now · Fresh stock arrived today"]}),(0,t.jsxs)(h.motion.h1,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.7,delay:.1},className:"text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-foreground",children:["Moradabad's ",(0,t.jsx)("span",{className:"text-primary dark:text-primary underline decoration-accent/30 decoration-4 underline-offset-4",children:"Trusted"}),(0,t.jsx)("br",{}),(0,t.jsx)("span",{className:"bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/70",children:"Grocery & Wholesale Mart"})]}),(0,t.jsx)(h.motion.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.25},className:"mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed",children:"Quality groceries, daily essentials and wholesale products at trusted prices — served fresh to families and businesses across the city."}),(0,t.jsxs)(h.motion.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.4},className:"mt-8 flex flex-wrap gap-3",children:[(0,t.jsxs)(E,{href:"#contact",className:"bg-gradient-brand text-primary-foreground px-8 py-4 rounded-full font-semibold shadow-glow",children:[(0,t.jsx)(p.Phone,{className:"w-4 h-4"})," Contact Us"]}),(0,t.jsxs)(E,{href:"#contact",className:"glass-light dark:glass text-foreground px-8 py-4 rounded-full font-semibold hover:scale-105",children:[(0,t.jsx)(g.MapPin,{className:"w-4 h-4"})," Visit Store"]})]}),(0,t.jsx)(h.motion.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6,delay:.55},className:"mt-10 flex flex-wrap gap-2 text-xs text-muted-foreground",children:[{i:y,t:"Trusted by 10K+ families"},{i:b,t:"Home delivery available"},{i:w.Clock,t:"Replies in ~5 min"}].map(e=>(0,t.jsxs)("span",{className:"inline-flex items-center gap-1.5 glass-light dark:glass rounded-full px-4 py-2 border border-foreground/5",children:[(0,t.jsx)(e.i,{className:"w-3.5 h-3.5 text-primary"})," ",e.t]},e.t))})]}),(0,t.jsxs)("div",{className:"lg:col-span-5 relative h-[420px] lg:h-[540px]",children:[(0,t.jsxs)(h.motion.div,{initial:{opacity:0,x:30},animate:{opacity:1,x:0},transition:{duration:.7,delay:.3},className:"absolute top-4 right-0 lg:right-6 glass-light dark:glass rounded-3xl p-6 w-64 animate-float border-primary/10",children:[(0,t.jsx)("div",{className:"flex items-center gap-1 text-primary mb-2",children:[void 0,void 0,void 0,void 0,void 0].map((e,i)=>(0,t.jsx)(m.Star,{className:"w-4 h-4 fill-current"},i))}),(0,t.jsx)("div",{className:"text-3xl font-bold text-foreground",children:"4.5★"}),(0,t.jsx)("div",{className:"text-xs text-muted-foreground mt-1 uppercase tracking-wider font-semibold",children:"Customer Rating"}),(0,t.jsx)("div",{className:"text-[10px] text-muted-foreground/60 mt-0.5",children:"Based on 83+ Verified Reviews"})]}),(0,t.jsxs)(h.motion.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.7,delay:.5},className:"absolute bottom-24 left-2 lg:left-0 glass-light dark:glass rounded-3xl p-6 w-60 animate-float-delay border-primary/10",children:[(0,t.jsx)("div",{className:"grid place-items-center w-12 h-12 rounded-2xl bg-gradient-brand shadow-glow mb-4",children:(0,t.jsx)(v,{className:"w-6 h-6 text-primary-foreground"})}),(0,t.jsx)("div",{className:"text-base font-bold text-foreground",children:"Fresh Daily"}),(0,t.jsx)("div",{className:"text-xs text-muted-foreground mt-1 leading-relaxed",children:"Stocked & quality checked every single morning."})]}),(0,t.jsxs)(h.motion.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.7,delay:.7},className:"absolute bottom-2 right-4 glass-light dark:glass rounded-3xl p-6 w-56 animate-float border-primary/10",children:[(0,t.jsx)("div",{className:"grid place-items-center w-12 h-12 rounded-2xl bg-gradient-warm shadow-warm mb-4",children:(0,t.jsx)(b,{className:"w-6 h-6 text-foreground"})}),(0,t.jsx)("div",{className:"text-base font-bold text-foreground",children:"Local Trust"}),(0,t.jsx)("div",{className:"text-xs text-muted-foreground mt-1 leading-relaxed",children:"Moradabad's favorite wholesale partner."})]})]})]}),(0,t.jsx)("div",{className:"absolute bottom-0 inset-x-0 h-24 bg-linear-to-b from-transparent to-background"})]})}],80941)},65144,e=>{e.n(e.i(80941))}]);