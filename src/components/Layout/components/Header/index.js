import classNames from "classnames/bind";
import styles from "./Header.module.scss";
const cx = classNames.bind(styles);
// Dùng chung Header cho các Layout khác
function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        {/* {Logo} */}
        {/* {Search} */}
      </div>
    </header>
  );
}

export default Header;
