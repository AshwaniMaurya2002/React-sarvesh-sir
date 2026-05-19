import { useState } from "react";
import {
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiChevronDown,
  FiMapPin,
  FiSmartphone,
  FiMonitor,
  FiCpu,
  FiHome,
  FiTv,
  FiHeart,
  FiBook,
  FiTruck,
  FiCamera,
  FiSun,
  FiShoppingBag,
  FiStar,
  FiTool,
  FiPackage,
  FiClock,
  FiNavigation,
} from "react-icons/fi";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import styles from "./NavBar.module.css";

const subNavItems = [
  {
    id: "minutes",
    label: "13 Minutes",
    icon: <FiClock size={14} color="#f57224" />,
  },
  {
    id: "travel",
    label: "Travel",
    icon: <FiNavigation size={14} color="#e91e63" />,
  },
  {
    id: "grocery",
    label: "Grocery",
    icon: <MdOutlineLocalGroceryStore size={16} color="#4caf50" />,
    extra: "Xtra Saver",
  },
];

const categories = [
  { icon: FiHeart, label: "For You", id: "foryou" },
  { icon: FiShoppingBag, label: "Fashion", id: "fashion" },
  { icon: FiSmartphone, label: "Mobiles", id: "mobiles" },
  { icon: FiSun, label: "Beauty", id: "beauty" },
  { icon: FiCpu, label: "Electronics", id: "electronics" },
  { icon: FiHome, label: "Home", id: "home" },
  { icon: FiTv, label: "Appliances", id: "appliances" },
  { icon: FiPackage, label: "Toys, ba...", id: "toys" },
  { icon: FiStar, label: "Food & H...", id: "food" },
  { icon: FiTruck, label: "Auto Acc...", id: "auto" },
  { icon: FiTool, label: "2 Wheele...", id: "2wheeler" },
  { icon: FiCamera, label: "Sports &...", id: "sports" },
  { icon: FiBook, label: "Books &...", id: "books" },
  { icon: FiMonitor, label: "Furniture", id: "furniture" },
];

export default function NavBar() {
  const [active, setActive] = useState("foryou");
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      console.log("Searching for:", query);
    }
  };

  return (
    <div className={styles.wrapper}>
      {/* Row 1*/}
      <div className={styles.topRow}>
        <button className={styles.logoPill}>
          <span className={styles.logoText}>Flipkart</span>
          <span className={styles.logoPlus}>
            <span className={styles.logoExplore}>Explore</span>
            <span className={styles.logoPlusBadge}>Plus ⭐</span>
          </span>
        </button>

        <div className={styles.subNav}>
          {subNavItems.map((item) => (
            <button key={item.id} className={styles.subPill}>
              <span className={styles.subPillIcon}>{item.icon}</span>
              {item.extra && (
                <span className={styles.subPillExtra}>{item.extra}</span>
              )}
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        <div className={styles.address}>
          <FiMapPin size={13} color="#2874f0" />
          <span className={styles.addressLabel}>WORK</span>
          <span className={styles.addressText}>
            Chanakya PG A-124 A Block Gali...
          </span>
          <FiChevronDown size={13} color="#2874f0" />
        </div>

        <div className={styles.coins}>🪙 25</div>
      </div>

      {/* Row 2 */}
      <div className={styles.searchRow}>
        <div className={styles.searchBox}>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Search for Products, Brands and More"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button
            className={styles.searchBtn}
            onClick={handleSearch}
            aria-label="Search"
          >
            <FiSearch size={20} />
          </button>
        </div>
      </div>

      {/* Row 3:  */}
      <div className={styles.rightNav}>
        <button className={styles.navBtn}>
          <FiUser size={15} />
          <span>Ashwani</span>
          <FiChevronDown size={13} />
        </button>

        <button className={styles.navBtn}>
          <span>More</span>
          <FiChevronDown size={13} />
        </button>

        <button className={`${styles.navBtn} ${styles.cartBtn}`}>
          <FiShoppingCart size={18} />
          <span className={styles.cartBadge}>3</span>
          <span>Cart</span>
        </button>
      </div>

      {/* Row 4 */}
      <div className={styles.categoryStrip}>
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <button
              key={cat.id}
              className={`${styles.catBtn} ${active === cat.id ? styles.active : ""}`}
              onClick={() => setActive(cat.id)}
            >
              <span className={styles.catIcon}>
                <Icon size={22} />
              </span>
              <span className={styles.catLabel}>{cat.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
