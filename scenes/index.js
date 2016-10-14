import _01 from './01'
import _02 from './02'
import _03 from './03'
import _04 from './04'
import _05 from './05'

export default function (stage, renderer) {
  _01(stage, renderer)
  _02(stage, renderer)
  _03(stage, renderer)
  _04(stage, renderer)
  _05(stage, renderer)
}

export function loadAssets (loader) {
  loader.add('star', './scenes/03/star.png')
        .add('suzukaze-mask', './scenes/05/suzukaze-mask.png')
        .add('yagami-mask', './scenes/05/yagami-mask.png')
        .add('rin-mask', './scenes/05/rin-mask.png')
        .add('hifumi-mask', './scenes/05/hifumi-mask.png')
        .load()
}
