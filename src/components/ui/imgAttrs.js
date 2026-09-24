// <img> 에 붙일 고유 크기(width·height)와 lazy 로딩 속성 — 크기는 scripts/image-sizes.js 가 만든 표에서 찾는다
import imageSizes from '../../content/imageSizes.json';

export default function imgAttrs(src, { eager = false } = {}) {
  const size = imageSizes[src];
  return {
    ...(size ? { width: size[0], height: size[1] } : {}),
    loading: eager ? 'eager' : 'lazy',
    decoding: 'async',
  };
}
