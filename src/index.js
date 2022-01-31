import './styles/main.scss';
import meta from './assets/meta.png';

class Player {
  name = 'Qwexzcy';
}

const player = new Player();
const p = document.createElement('p');
p.textContent = player.name;

const img = document.createElement('img');
img.src = meta;

const app = document.querySelector('#root');
app.append(p, img);
