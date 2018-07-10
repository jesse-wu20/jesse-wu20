anime({
  targets: '.container',
  opacity: 1,
  duration: 2000,
  easing: 'easeOutCubic',
})

var jesse_wu = {
  strings: ["Jesse wu", "Jesse_Wu"],
  typeSpeed: 250,
  backSpeed: 100,
  showCursor:false
}

var typed = new Typed(".name", jesse_wu);

var chineseTimeline = anime.timeline({
});
var colorTimeline = anime.timeline({
  loop: true,
});
var mainTimeline = anime.timeline({
});

mainTimeline
.add({
  targets: '.name',
  color:'#A154EA',
  delay: 5000,
})
.add(colorTimeline
.add({
  offset: '+=2500',
  targets: '.name',
  color: '#A154EA',
  duration: 2500,
})
.add({
  offset: '+=2500',
  targets: '.name',
  color: '#FA4545',
  duration: 2500,
})
.add({
  offset: '+=2500',
  targets: '.name',
  color:'#6BE44D',
  duration: 2500,
})
.add({
  offset: '+=2500',
  targets: '.name',
  color:'#2898ff',
  duration: 2500,
})
.add({
  offset: '+=2500',
  targets: '.name',
  color:'#000000',
  duration: 2500,
}));


var mq = window.matchMedia('(min-width: 1224px)');
if(mq.matches) {
  anime({
    targets: '.or',
    opacity: {
      value: 1,
      delay: 5700,
      duration: 1500,
      easing: 'easeOutCubic'
    },
    translateY: {
      value: -80,
      duration: 4000,
      elasticity: 150,
      delay: 0
    },
    scale: {
      value: 2,
      delay: 5700,
      duration: 1500,
      easing: 'easeOutCubic'
    }
  });
}else{
  anime({
    targets: '.divider',
    opacity: {
      value: 1,
      delay: 5600,
      duration: 3500,
      easing: 'easeOutQuad'
    },
  })
}

anime({
  targets: '.dot',
  opacity: {
    value: 1,
    delay: 5700,
    duration: 1500,
    easing: 'easeOutCubic'
  }
});
anime({
  targets: '#facebook.icon',
  opacity: {
    value: 1,
    delay: 6500,
    duration: 1500,
    easing: 'linear'
  },
});
anime({
  targets: '#instagram.icon',
  opacity: {
    value: 1,
    delay: 6500,
    duration: 1500,
    easing: 'linear'
  },
});
anime({
  targets: '.about-link',
  opacity: {
    value: 1,
    delay: 6500,
    duration: 1500,
    easing: 'linear'
  },
});
anime({
  targets: '.blog-link',
  opacity: {
    value: 1,
    delay: 7000,
    duration: 1500,
    easing: 'linear'
  },
});
anime({
  targets: '#totoro.icon',
  opacity: {
    value: 1,
    delay: 7000,
    duration: 1500,
    easing: 'linear'
  },
});
anime({
  targets: '#resume.icon',
  opacity: {
    value: 1,
    delay: 7000,
    duration: 1500,
    easing: 'linear'
  },
});

var ease='easeInOutSine';

var counter = 0;
chineseTimeline
.add({
  targets: '.Wu path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: ease,
  duration: 333.3333,
  delay: function(el, i) { return i * 225 },
})
.add({
  targets: '.Jie path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: ease,
  duration: 333.3333,
  delay: function(el, i) { return i * 225 },
})
.add({
  targets: '.Xi path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: ease,
  duration: 333.3333,
  delay: function(el, i) { return i * 225 },
});

anime({
      targets: '.version',
      innerHTML: parseFloat(2.0),
      duration: 2500,
      delay: 7500,
      easing: 'easeOutCubic',
      update: function(a) {
        var value = a.animatables[0].target.innerHTML;
        value = parseFloat(value).toFixed(1);
        a.animatables[0].target.innerHTML = value;
      },
})

anime({
      targets: '.year',
      innerHTML: parseInt(2018),
      duration: 2500,
      delay: 7500,
      easing: 'easeOutCubic',
      update: function(a) {
        var value = a.animatables[0].target.innerHTML;
        value = parseInt(value);
        a.animatables[0].target.innerHTML = value;
      },
})

anime({
  targets: '.credit',
  opacity: .3,
  delay: 7500,
  duration: 1500,
  easing: 'easeOutCubic',
})
