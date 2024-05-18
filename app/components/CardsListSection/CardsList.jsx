import Link from "next/link";
import { Card } from "../Card/Card";
import Styles from "./CardsListSection.module.css";
import { Preloader } from "../Preloader/Preloader";

export const CardsList = (props) => {
  return (
    <ul className={Styles["cards-list"]}>
      {props.data ? (
        props.data.map((item) => {
          return (
            <li className={Styles["cards-list__item"]} key={item.id}>
              <Link
                href={`/games/${item.id}`}
                className={Styles["card-list__link"]}
              >
                <Card {...item} />
              </Link>
            </li>
          );
        })
      ) : (
        <Preloader />
      )}
    </ul>
  );
};
