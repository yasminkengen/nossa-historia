const scenes = [
 {
    text: "Você vê o perfil de uma menina com um afilhado fofo. Ela parece bonita… e você começa a curtir algumas fotos.",
    options: [
      { text: "Curtir mais uma do afilhado, quem sabe ela nota?", nextScene: 1 },
      { text: "Mandar um 'oi' disfarçado num story?", nextScene: 1 }
    ]
  },
  {
    text: "Ela finalmente percebe e começa uma conversa.",
    options: [
      { text: "Só perguntar se ela está bem, e deixar a conversa acabar.", nextScene: 2 },
      { text: "Investir e marcar algo para conhcer o gordinho.", nextScene: 2 }
    ]
  },
  {
     text: "Um dia, ela curte uma foto sua. É uma paisagem, mas mesmo assim... tem algo ali.",
    options: [
      { text: "Chamar ela no DM e puxar papo", nextScene: 3 },
      { text: "Perguntar se ela vai curtir mais ou vai dar um beijo?", nextScene: 3 }
    ]
  },
  {
    text: "Depois de algumas conversas, vocês marcam de se ver. O que você sugere?",
    options: [
      { text: "Um encontro bem romantico.", nextScene: 4 },
      { text: "Levar ela para conhecer a caso dos seus 'avôs'.", nextScene: 4 }
    ]
  },
  {
    text: "No dia do encontro, você se arruma com cuidado e fica ansioso esperando por ela.",
    options: [
      { text: "Receber ela com um sorriso e flores.", nextScene: 5 },
      { text: "Ser descontraído e já dar um beijo.", nextScene: 5 }
    ]
  },
  {
    text: "O encontro foi MARAVILHOSO, e vocês decidem marcar outro. E você decide buscar ela na escola, o que vocês fazem após?",
    options: [
      { text: "Comem um lanche maravilhoso, ela te da um perfume e você decide levar ela para conhecer sua mãe.", nextScene: 6 },
      { text: "Sugerir um filme em casa, com pizza e vinho.", nextScene: 6 }
    ]
  },
  {
    text: "No segundo encontro, o clima fica mais íntimo, e vocês começam a se conhecer de verdade. Mas ela tem uma festa surpresa, o que fazer?",
    options: [
      { text: "Vou como um amigo.", nextScene: 7 },
      { text: "Vou com a condição de me apresentar como namorado.", nextScene: 7 }
    ]
  },
  {
    text: "No dia do aniversário dela, você conhece a familia e principalmente o gordinho. O dia foi super legal e ela te pede em namoro.",
    options: [
      { text: "Você responde que SIM, CLARO, ACEITO.", nextScene: 8 },
      { text: "Diz que não, mas já caiu no charme dela. ", nextScene: 8 }
    ]
  },
  {
    text: "Você começa a morar com ela na casa da vovô e vocês tem um lugar favorito, qual lugar?",
    options: [
      { text: "Mc Donalds.", nextScene: 9 },
      { text: "Starbucks.", nextScene: 9 }
    ]
  },
  {
    text: "Um dia, tudo dá errado e ela pede para você confiar nela. O que você faz?",
    options: [
      { text: "Larga o trabalho que está, vai morar com sua sogra e busca algo melhor.", nextScene: 10 },
      { text: "Diz 'Não, você está louca?'", nextScene: 10 }
    ]
  },
  {
    text: "Você consegue um ótimo trabalho, vira um ótimo gerente e tudo esta indo bem. E você decide pedir ela em casamento, como faz?",
    options: [
      { text: "Faz uma surpresa linda, com balões, alianças, fotos e dizeres lindos.", nextScene: 11 },
      { text: "Só pergunta se ela quer casar.", nextScene: 11 }
    ]
  },
  {
    text: "Ela diz sim! Vocês se abraçam e celebram esse amor. Mas agora que casou, o que fazem?",
    options: [
      { text: "Alugam uma casa, começam do zero e se tornam as pessoas mais felizes do mundo.", nextScene: 12 },
      { text: "Continuam onde estão.", nextScene: 12 }
    ]
  },
  {
    text: "Não importa o que você escolheu… Desde o primeiro clique, o destino já era nosso. 💘",
    options: [
      { text: "Recomeçar nossa história 💞", nextScene: 0 }
    ]
  }
];

const sceneText = document.getElementById('scene-text');
const optionsDiv = document.getElementById('options');

function renderScene(index) {
  const scene = scenes[index];
  if (!scene) {
    sceneText.textContent = "Cena não encontrada!";
    return;
  }

  sceneText.textContent = scene.text;
  optionsDiv.innerHTML = '';

  scene.options.forEach(option => {
    const button = document.createElement('button');
    button.textContent = option.text;
    button.onclick = () => renderScene(option.nextScene);
    optionsDiv.appendChild(button);
  });
}

renderScene(0);

const music = document.getElementById('musica');
if (music) music.volume = 0.3;

const playBtn = document.getElementById('play-music');
if (playBtn) {
  playBtn.addEventListener('click', () => {
    music.currentTime = 0;
    music.play().catch(err => {
      alert("⚠️ Seu navegador bloqueou o áudio. Tente tocar novamente.");
    });
  });
}


