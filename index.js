'use strict';

var cheerio = require('cheerio');
var path = require('path');
var fs = require('hexo-fs');

var d = {};


var config = {
  underline_selectors: ['.article-entry a'],
  exclude_selectors: ['p.article-more-link a'],
  play_sound: false
}

if (hexo.config.fancy_underline) {
  for (var key in config) {
    if (hexo.config.fancy_underline[key]) {
      config[key] = hexo.config.fancy_underline[key];
    }
  }
}

hexo.extend.filter.register('after_render:html', function(source) {

  if (hexo.config.fancy_underline && !hexo.config.fancy_underline.enable) {
    return source;
  }

  var $ = cheerio.load(source);

  for (var i in config.underline_selectors) {
    var selector = config.underline_selectors[i];
    $(selector).addClass('hexo-fancy-underline');
  }

  for (var i in config.exclude_selectors) {
    var selector = config.exclude_selectors[i];
    $(selector).removeClass('hexo-fancy-underline');
  }

  $('html > head').append('<link type="text/css" rel="stylesheet" href="/underline.js/css/underline.css" />');
  $('html > head').append('<script type="text/javascript" src="/underline.js/js/baseline-ratio.js"></script>');
  $('html > head').append('<script type="text/javascript" src="/underline.js/js/underline.js"></script>');
  $('html > head').append('<script type="text/javascript" src="/underline.js/js/guitar-string.js"></script>');
  $('html > head').append('<script type="text/javascript" src="/underline.js/js/single-underline.js"></script>');
  $('html > head').append('<script type="text/javascript" src="/underline.js/js/multiple-underline.js"></script>');

  if (config.play_sound) {
    $('html > body').prepend('<div class="audio"><audio id="audio00" src="/underline.js/audio/cello_00.mp3" preload="auto"></audio><audio id="audio01" src="/underline.js/audio/cello_01.mp3" preload="auto"></audio><audio id="audio02" src="/underline.js/audio/cello_02.mp3" preload="auto"></audio><audio id="audio03" src="/underline.js/audio/cello_03.mp3" preload="auto"></audio><audio id="audio04" src="/underline.js/audio/cello_04.mp3" preload="auto"></audio><audio id="audio05" src="/underline.js/audio/cello_05.mp3" preload="auto"></audio><audio id="audio06" src="/underline.js/audio/cello_06.mp3" preload="auto"></audio><audio id="audio07" src="/underline.js/audio/cello_07.mp3" preload="auto"></audio><audio id="audio08" src="/underline.js/audio/cello_08.mp3" preload="auto"></audio><audio id="audio09" src="/underline.js/audio/cello_09.mp3" preload="auto"></audio><audio id="audio10" src="/underline.js/audio/cello_10.mp3" preload="auto"></audio><audio id="audio11" src="/underline.js/audio/cello_11.mp3" preload="auto"></audio><audio id="audio12" src="/underline.js/audio/cello_12.mp3" preload="auto"></audio><audio id="audio13" src="/underline.js/audio/cello_13.mp3" preload="auto"></audio><audio id="audio14" src="/underline.js/audio/cello_14.mp3" preload="auto"></audio><audio id="audio15" src="/underline.js/audio/cello_15.mp3" preload="auto"></audio><audio id="audio16" src="/underline.js/audio/cello_16.mp3" preload="auto"></audio><audio id="audio17" src="/underline.js/audio/cello_17.mp3" preload="auto"></audio><audio id="audio18" src="/underline.js/audio/cello_18.mp3" preload="auto"></audio><audio id="audio19" src="/underline.js/audio/cello_19.mp3" preload="auto"></audio></div>');
  }

  return $.html({decodeEntities: false});
});

var asserts = [
  "audio/cello_00.mp3",
  "audio/cello_01.mp3",
  "audio/cello_02.mp3",
  "audio/cello_03.mp3",
  "audio/cello_04.mp3",
  "audio/cello_05.mp3",
  "audio/cello_06.mp3",
  "audio/cello_07.mp3",
  "audio/cello_08.mp3",
  "audio/cello_09.mp3",
  "audio/cello_10.mp3",
  "audio/cello_11.mp3",
  "audio/cello_12.mp3",
  "audio/cello_13.mp3",
  "audio/cello_14.mp3",
  "audio/cello_15.mp3",
  "audio/cello_16.mp3",
  "audio/cello_17.mp3",
  "audio/cello_18.mp3",
  "audio/cello_19.mp3",
  "css/animation.css",
  "css/mobile.css",
  "css/reset.css",
  "css/tablet.css",
  "css/underline.css",
  "js/baseline-ratio.js",
  "js/classie.js",
  "js/guitar-string.js",
  "js/multiple-underline.js",
  "js/multiple.js",
  "js/single-underline.js",
  "js/underline.js"
]

var assetBase = path.resolve(__dirname, "./assert");

hexo.extend.generator.register('hexo-fancy-underline', function(locals) {

  var routes = asserts.map(function(f) {
    var p = 'underline.js/' + f;
    var filePath = path.resolve(assetBase, f);

    return {
      path: p,
      data: function () {
        return fs.createReadStream(filePath);
      }
    };
  });

  return routes;
});
