declare module '*.png' {
  const content: import('../dist/shared/lib/image-external').StaticImageData;

  export default content;
}

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const content: import('../dist/shared/lib/image-external').StaticImageData;

  export default content;
}

declare module '*.jpeg' {
  const content: import('../dist/shared/lib/image-external').StaticImageData;

  export default content;
}

declare module '*.gif' {
  const content: import('../dist/shared/lib/image-external').StaticImageData;

  export default content;
}

declare module '*.webp' {
  const content: import('../dist/shared/lib/image-external').StaticImageData;

  export default content;
}

declare module '*.avif' {
  const content: import('../dist/shared/lib/image-external').StaticImageData;

  export default content;
}

declare module '*.ico' {
  const content: import('../dist/shared/lib/image-external').StaticImageData;

  export default content;
}

declare module '*.bmp' {
  const content: import('../dist/shared/lib/image-external').StaticImageData;

  export default content;
}
