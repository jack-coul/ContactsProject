import React from "react";

const About: React.FC = () => {
  return (
    <div className="cv">
      <section>
        <h1>Комурзоев Ислам Баширович</h1>
        <h2>Frontend (React, Node.js) Developer</h2>
        <div className="theme-switch-wrapper">
          <label className="theme-switch">
            <img
              src="https://hhcdn.ru/photo/650583894.jpeg?t=1651140799&h=fDyLryDrKCbnd3DSwgihkA"
              alt=""
            />
            <input type="checkbox" className="theme-switch__checkbox" />
            <div className="slider round"></div>
          </label>
        </div>

        <div className="contacts">
          <div className="contact">
            <div className="contact__type">Резюме</div>
            <div className="contact__value">
              <a href="https://groznyj.hh.ru/resume/7f1e6548ff09db82180039ed1f737161787958">
                Полное резюме
              </a>
            </div>
          </div>
          <div className="contact">
            <div className="contact__type">Github</div>
            <div className="contact__value">
              <a href="https://github.com/jack-coul">
                https://github.com/jack-coul
              </a>
            </div>
          </div>

          <div className="contact">
            <div className="contact__type">Email</div>
            <div className="contact__value">
              <a href="mailto:jackcoul0677@gmail.com">jackcoul0677@gmail.com</a>
            </div>
          </div>
          <div className="contact">
            <div className="contact__type">Telegram</div>
            <div className="contact__value">
              <a href="https://t.me/JackCoul">JackCoul</a>
            </div>
          </div>
          <div className="contact">
            <div className="contact__type">Phone</div>
            <div className="contact__value">
              <span>+7-(996)-950-63-13</span>
            </div>
          </div>
        </div>

        <div className="description">
          Доброго времени суток, Меня зовут Ислам, я, уже на протяжении года,
          занимаюсь web программированием, уверенно владею, React, Redux, +
          имеется опыт с webpack, на данном этапе, занят переносом проекта, на
          Typescript(то есть уже знаком), серверная часть:
          nodejs+express+mongodb, так же сумею изучить новые технологии, за
          короткий срок, так как я дисциплинированный и быстро обучаюсь.
        </div>
      </section>

      <section>
        <h3>Должность</h3>

        <div className="experience">
          <div className="experience__date">10.05.2021</div>
          <div className="experience__description">
            <div className="experience__name">
              Frontend (React, Node.js) Developer
            </div>
            <div className="experience__company">Intocode</div>
            <div className="experience__details">
              <ul>
                <li>
                  HTML, CSS, JavaScript, React (Next.js), Node.js, MongoDB;
                </li>
                <li>Адаптивная и кросс-браузерная верстка сайтов;</li>
                <li>Проверка и тестирование функционала (не только своего);</li>
                <li>
                  Разработка новых npm модулей для существующих приложений;
                </li>
                <li>
                  Проведение рефакторинга (улучшения и оптимизации кода) и
                  ускорение работы сайтов/приложений;
                </li>
                <li>
                  CRUD операции для REST API на Frontend стороне + Backend
                </li>
                <li>Исправление багов;</li>
                <li>Разработка клиентской части сайтов на React;</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3>Скилы</h3>
        <div>
          JavaScript, React, Redux, HTML, CSS, Node.js , Webpack, TypeScript,
          redux-thunk, Git, MongoDB, Express.js, Bootstrap, Material Ui,
          Materialize, SCSS, SASS, Websocket(socket.io), react-router
        </div>
      </section>
    </div>
  );
};

export default About;
