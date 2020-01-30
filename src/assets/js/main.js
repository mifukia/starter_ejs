/**
 * import Vue
 * ※vueを使用しない場合は削除する
 */
import App from './vue/App.js';

/**
 * import node_modules
 */
import AOS from 'aos';
import 'desvg';
import objectFitImages from 'object-fit-images';
import picturefill from 'picturefill';
import SmoothScroll from 'smooth-scroll';

/**
 * import modules
 */
import Sample from './modules/sample';
import Common from './modules/common';

/**
 * Mainクラス
 * @constructor
 */
class Main {
  constructor() {
    this.setup();
  }
  /**
   * インスタンス生成時に実行する処理
   */
  setup() {
    document.addEventListener('DOMContentLoaded', () => {
      this.created();
    })
    window.addEventListener('load', () => {
      this.mounted();
    });
  }
  /**
   * ページ読み込み時に実行する処理
   */
  created() {
    picturefill();

    const sample = new Sample();
    sample.init();

    const common = new Common();
    common.init();
  }
  /**
   * 画像読み込み後に実行する処理
   */
  mounted() {

    this.init_aos();

    this.init_deSVG('.js-desvg');

    this.init_objectFitImages('.object-fit');

    this.init_smoothScroll();
  }

  /**
   * ライブラリ/AOS
   * スクロールアニメーション
   * https://michalsnik.github.io/aos/
   */
  init_aos() {
    /**
     * オプション
     * @type {object}
     */
    const option_aos = {
      offset: 400,
      duration: 750,
      easing: 'ease-out-back',
      delay: 200,
      anchorPlacement: 'top-bottom',
      once: true,
    }
    AOS.init(option_aos);
  }

  /**
   * ライブラリ/deSVG
   * インラインsvgをsvgタグに変換
   * https://github.com/benhowdle89/deSVG
   * @param {Element} target ターゲットとなる要素
   */
  init_deSVG(target) {
    deSVG(target, true)
  }

  /**
   * ライブラリ/object-fit-images
   * css object-fit のポリフィル
   * https://github.com/fregante/object-fit-images
   * @param {Element} target ターゲットとなる要素
   */
  init_objectFitImages(target) {
    objectFitImages(target);
  }

  /**
   * ライブラリ/picturefill
   * html pictureタグのポリフィル
   * https://scottjehl.github.io/picturefill/
   */
  init_picturefill() {
    picturefill();
  }

  /**
   * ライブラリ/smooth-scroll
   * スムーススクロール
   * https://github.com/cferdinandi/smooth-scroll
   */
  init_smoothScroll() {
    /**
     * ターゲットとなる要素
     * @type {Element}
     */
    const targetElement = 'a[href*="#"]';

    /**
     * オプション
     * @type {object}
     */
    const option = {
      speed: 1000,
      easing: 'easeInOutCubic',
      speedAsDuration: true,
      //header: '.l-header' 固定ヘッダーの場合
    }

    new SmoothScroll(targetElement, option);
  }
}

export default new Main();
