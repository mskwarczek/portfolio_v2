export interface IMixins {
  mixins: {
    absoluteCenter: string;
  };
}

const mixins = {
  absoluteCenter: `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
};

export default mixins;
