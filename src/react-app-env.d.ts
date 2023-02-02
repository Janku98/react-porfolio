/// <reference types="react-scripts" />
declare module '*.jpg';
declare module '*.JPG';
declare module '*.pdf';
declare module '*.png';
declare module '*.svg' {
    import React = require('react');
  
    export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
  }