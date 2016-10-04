'use strict';

function get(params) {
  var elementWidth = parseFloat(params.elementWidth),
      elementHeight = parseFloat(params.elementHeight),
      containerWidth = parseFloat(params.containerWidth),
      containerHeight = parseFloat(params.containerHeight),
      elementRatio, containerRatio, t, l, w, h, mt, ml;

  if (isNaN(elementWidth) || isNaN(elementHeight)) {
    throw new Error('elementWidth or elementHeight are NaN');
  }
  if (isNaN(containerWidth) || isNaN(containerHeight)) {
    throw new Error('containerWidth or containerHeight are NaN');
  }

  elementRatio = elementWidth / elementHeight;
  containerRatio = containerWidth / containerHeight;

  if (elementRatio > containerRatio) {
    w = 'auto';
    h = '100%';

    t = 0;
    l = '50%';

    mt = 0;
    ml = (- (containerHeight * elementRatio) / 2) + 'px';
  } else {
    w = '100%';
    h = 'auto';

    t = '50%';
    l = 0;

    mt = (- (containerWidth / elementRatio) / 2) + 'px';
    ml = 0;
  }

  return {
    top: t,
    left: l,
    width: w,
    height: h,
    marginTop: mt,
    marginLeft: ml
  };
}

module.exports = {
  get: get
};
