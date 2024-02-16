import styles from '../styles/GameRules.module.css';
import img1 from '../assets/images/portfolio/img1.jpg'
import Image from 'next/dist/client/image';

function GameRules() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Game Rules</h1>
      <center>
      <Image
                    className="card-img-top"
                    src={img1}
                    alt="wrappixel kit"
                  />
        </center>
      <p className={styles.gameDescription}>
        The objective of the game is to collect the most points by correctly
        answering a series of questions. Each question has a point value
        assigned to it, and the player with the most points at the end of the
        game is declared the winner.
      </p>
      <ol className={styles.list}>
        <li className={styles.rule}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eleifend
          magna vel justo bibendum, eu posuere eros imperdiet.
        </li>
        <li className={styles.rule}>
          Maecenas sollicitudin ligula eget tellus dignissim, ac viverra eros
          dignissim. Praesent hendrerit, nibh ac accumsan vulputate, mi libero
          hendrerit nulla, eget lacinia quam odio vitae urna. Sed dictum
          consectetur tincidunt.
        </li>
        <li className={styles.rule}>
          Etiam ultricies urna nunc, ut ultricies sapien tristique quis. Nunc
          bibendum, quam in bibendum vehicula, ex nulla congue dui, nec vehicula
          elit sapien ac nisi. Nulla at consequat erat.
        </li>
        <li className={styles.rule}>
          Praesent euismod sapien eu nisl aliquet sagittis. Donec tristique
          imperdiet felis, vel aliquet sem tincidunt eget. Nam varius, risus at
          semper blandit, nibh massa iaculis nibh, id dignissim quam tortor sit
          amet lacus.
        </li>
      </ol>
      <a className="btn btn-info" href="/book">
                    book
                  </a>
    </div>
  );
}

export default GameRules;
