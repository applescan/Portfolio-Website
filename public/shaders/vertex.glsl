#define PI 3.1415926535897932384626433832795
const float TAU = PI * 2.0;

uniform float u_time;

varying vec3 v_mod_pos;
varying vec3 v_orig_pos;
varying float v_tail_bumps;
varying float v_head_swirl;
varying float v_head_bumps;

float get_area(float begin, float end, float value) {
  return step(begin, value) - step(end, value);
}

float get_normalized_range(float begin, float end, float value) {
  float range = end - begin;
  return value / range;
}

void main() {
  vec4 model_position = modelMatrix * vec4(position, 1.0);
  vec3 orig_pos = model_position.xyz;
  vec3 mod_pos = model_position.xyz;

  mod_pos.xz *= 1.0 - smoothstep(0.05, -0.4, orig_pos.y) * 0.2;
  mod_pos.xz *= 1.0 - smoothstep(0.05, -1.0, orig_pos.y);
  mod_pos.y *= 1.0 + smoothstep(0.0, -1.0, orig_pos.y) * 2.0;

  float area_curled_under_head = smoothstep(0.1, 0.0, orig_pos.y) - smoothstep(-0.1, 0.0, orig_pos.y);
  float area_curled_under_head_position = clamp(get_normalized_range(0.1, -0.1, orig_pos.y), 0.0, 1.0);
  mod_pos.y += sin(area_curled_under_head_position * PI * 0.5) * area_curled_under_head * 0.5;

  float swim_speed = u_time * 2.0 + sin(u_time * 2.0 + PI) * 0.5 + snoise2(vec2(u_time * 0.02, 0.0));
  mod_pos.y += sin(swim_speed + mod_pos.y + PI * 0.4) * 0.15;

  mod_pos.x += sin(swim_speed * 0.5 + mod_pos.y * 3.5) * 0.15 * clamp(orig_pos.y - 0.3, 0.0, 1.0) * smoothstep(-0.6, -0.4, orig_pos.y);
  mod_pos.z += cos(swim_speed * 0.5 + mod_pos.y * 3.7) * 0.15 * clamp(orig_pos.y - 0.3, 0.0, 1.0) * smoothstep(-0.6, -0.4, orig_pos.y);

  float swimming_head_area = 1.0 - smoothstep(-0.2, -0.4, orig_pos.y);
  mod_pos.x *= 1.0 + sin(swim_speed + orig_pos.y) * (swimming_head_area * 0.15 + (0.1 * orig_pos.y));
  mod_pos.z *= 1.0 + sin(swim_speed + orig_pos.y) * (swimming_head_area * 0.15 + (0.1 * orig_pos.y));
  mod_pos.y *= 1.0 + sin(swim_speed + orig_pos.y + PI * 0.75) * swimming_head_area * 0.1;

  float head_swirl_angle = atan(orig_pos.x, orig_pos.z);
  float head_swirl = (0.5 + sin(((head_swirl_angle + PI) / TAU) * TAU * 8.0) * 0.5)
                     * (smoothstep(1.0, 0.75, orig_pos.y) - smoothstep(0.4, 0.0, orig_pos.y));
  mod_pos *= 1.0 + 0.05 * head_swirl;
  v_head_swirl = head_swirl;

  vec4 head_bumps_vector = vec4(orig_pos.xz * 8.0 * (2.0 - orig_pos.y), orig_pos.y * 4.0 + mod_pos.y * 0.25, swim_speed * 0.1);
  float head_bumps = abs(snoise4(head_bumps_vector)) * smoothstep(0.1, 0.125, orig_pos.y);
  v_head_bumps = head_bumps;
  mod_pos *= 1.0 + head_bumps * 0.025;

  float swimming_tail_area = smoothstep(-0.3, -1.0, orig_pos.y);
  mod_pos.y *= 1.0 + sin(swim_speed + orig_pos.y + PI) * swimming_tail_area * 0.1;

  float spin_amount = 0.5 + sin(swim_speed + orig_pos.y - PI) * 0.5;
  mod_pos.x += sin(exp(orig_pos.y * 0.25) * PI * 24.0 + u_time * 4.0) * smoothstep(0.0, -1.0, orig_pos.y) * 0.3 * spin_amount;
  mod_pos.z += cos(exp(orig_pos.y * 0.25) * PI * 16.0 + u_time * 4.0) * smoothstep(0.0, -1.0, orig_pos.y) * 0.3 * spin_amount;

  vec4 spin_noise_vector = vec4(mod_pos.xz + spin_amount, mod_pos.y + spin_amount + u_time * 0.5, u_time * 0.05);
  float spin_noise = snoise4(spin_noise_vector) * smoothstep(0.0, -0.5, orig_pos.y) * mod_pos.y;
  mod_pos.xz *= 1.0 + spin_noise;

  vec4 tail_bump_vector = vec4(orig_pos.xz * 8.0, orig_pos.y * 2.0, u_time * 0.2);
  float tail_bumps = abs(snoise4(tail_bump_vector) * smoothstep(0.0, -0.5, orig_pos.y));
  mod_pos.x += sin(tail_bumps * PI) * 0.02;
  mod_pos.z += cos(tail_bumps * PI) * 0.02;

  mod_pos.y += sin(swim_speed + mod_pos.y + PI * 0.4) * 0.25;

  vec4 view_position = viewMatrix * vec4(mod_pos, 1.0);
  vec4 projected_position = projectionMatrix * view_position;
  gl_Position = projected_position;

  v_mod_pos = mod_pos;
  v_orig_pos = orig_pos;
  v_tail_bumps = tail_bumps;
}
