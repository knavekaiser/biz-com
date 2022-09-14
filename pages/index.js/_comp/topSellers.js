import React from "react";
import { RankBadge } from "components/svg";
import Link from "next/link";
import { Select } from "components/elements";
import { useForm } from "react-hook-form";
import s from "./styles/landingPage.module.scss";

const sellers = [
  {
    rank: 2,
    name: "John Weak",
    usdc: 512,
    benner:
      "https://images.unsplash.com/photo-1604782206219-3b9576575203?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    profileImg:
      "https://images.unsplash.com/photo-1612487528505-d2338264c821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=52&h=52&q=60",
  },
  {
    rank: 5,
    name: "John Weak",
    usdc: 512,
    benner:
      "https://images.unsplash.com/photo-1558865869-c93f6f8482af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    profileImg:
      "https://images.unsplash.com/photo-1612487528505-d2338264c821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=52&h=52&q=60",
  },
  {
    rank: 8,
    name: "John Weak",
    usdc: 512,
    benner:
      "https://images.unsplash.com/photo-1603101243278-c181ceaad748?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    profileImg:
      "https://images.unsplash.com/photo-1612487528505-d2338264c821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=52&h=52&q=60",
  },
  {
    rank: 7,
    name: "John Weak",
    usdc: 512,
    benner:
      "https://images.unsplash.com/photo-1569437061238-3cf61084f487?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    profileImg:
      "https://images.unsplash.com/photo-1612487528505-d2338264c821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=52&h=52&q=60",
  },
  {
    rank: 5,
    name: "John Weak",
    usdc: 512,
    benner:
      "https://images.unsplash.com/photo-1615184697985-c9bde1b07da7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    profileImg:
      "https://images.unsplash.com/photo-1612487528505-d2338264c821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=52&h=52&q=60",
  },
  {
    rank: 4,
    name: "John Weak",
    usdc: 512,
    benner:
      "https://images.unsplash.com/photo-1581300741129-49680ba5ecc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVybiUyMGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    profileImg:
      "https://images.unsplash.com/photo-1612487528505-d2338264c821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=52&h=52&q=60",
  },
  {
    rank: 7,
    name: "John Weak",
    usdc: 512,
    benner:
      "https://images.unsplash.com/photo-1581172983039-f7653be6fbc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVybiUyMGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    profileImg:
      "https://images.unsplash.com/photo-1612487528505-d2338264c821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=52&h=52&q=60",
  },
  {
    rank: 4,
    name: "John Weak",
    usdc: 512,
    benner:
      "https://images.unsplash.com/photo-1599753408328-b704f00319ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVybiUyMGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    profileImg:
      "https://images.unsplash.com/photo-1612487528505-d2338264c821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=52&h=52&q=60",
  },
  {
    rank: 8,
    name: "John Weak",
    usdc: 512,
    benner:
      "https://images.unsplash.com/photo-1536759078151-61c8b6f156a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fG1vZGVybiUyMGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    profileImg:
      "https://images.unsplash.com/photo-1612487528505-d2338264c821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=52&h=52&q=60",
  },
  {
    rank: 5,
    name: "John Weak",
    usdc: 512,
    benner:
      "https://images.unsplash.com/photo-1550532422-378e93ec379c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fG1vZGVybiUyMGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    profileImg:
      "https://images.unsplash.com/photo-1612487528505-d2338264c821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=52&h=52&q=60",
  },
];

export default function TopSellers() {
  const { control } = useForm();
  return (
    <div className={`${s.shelf} ${s.topSeller}`}>
      <div className={s.shelfHead}>
        <span className={s.shelfTitle}>
          <svg
            width="40"
            height="34"
            viewBox="0 0 40 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38.8277 33.4072H27.0312V31.0635L30.5469 27.5479V25.2041C30.5469 24.5564 31.071 24.0322 31.7187 24.0322H38.8277C39.2602 24.0322 39.6562 24.2703 39.8599 24.6514C40.0659 25.0325 40.043 25.4948 39.8027 25.8542L37.8916 28.7198L39.8027 31.5854C40.043 31.9448 40.0659 32.4071 39.8599 32.7882C39.6562 33.1692 39.2602 33.4072 38.8277 33.4072V33.4072Z"
              fill="#BF283F"
            />
            <path
              d="M12.9688 33.4074H1.17239C0.739813 33.4074 0.343875 33.1693 0.140125 32.7882C-0.0658904 32.4071 -0.0429998 31.9448 0.197313 31.5854L2.10848 28.7198L0.197313 25.8542C-0.0429998 25.4948 -0.0658904 25.0325 0.140125 24.6514C0.343797 24.2703 0.739813 24.0322 1.17239 24.0322H8.2813C8.92903 24.0322 9.45317 24.5564 9.45317 25.2041V27.5479L12.9688 31.0635V33.4074Z"
              fill="#D9415A"
            />
            <path
              d="M31.7188 26.376H27.0312C26.3749 26.376 25.8594 26.8915 25.8594 27.5479V32.2354C25.8594 32.8915 26.3749 33.4072 27.0312 33.4072C29.8673 33.4072 32.2343 31.3916 32.7734 28.7197L31.7188 26.376Z"
              fill="#4D2E2E"
            />
            <path
              d="M12.9688 26.376H8.28125L7.22656 28.7197C7.7657 31.3916 10.1328 33.4072 12.9688 33.4072C13.6251 33.4072 14.1406 32.8915 14.1406 32.2354V27.5479C14.1406 26.8915 13.6251 26.376 12.9688 26.376Z"
              fill="#664747"
            />
            <path
              d="M31.7188 19.3448H26.4687C25.6688 19.3448 25.1885 20.0899 25.3203 20.7041L25.3437 20.8213L20.539 18.3135C20.2109 18.126 19.789 18.126 19.4609 18.3135L14.6562 20.8213L14.6796 20.7041C14.8123 20.0859 14.3259 19.3448 13.5312 19.3448H8.28125C7.62492 19.3448 7.10938 19.8603 7.10938 20.5167V27.5479C7.10938 27.9463 7.15633 28.3447 7.22656 28.7198H32.7734C32.8437 28.3447 32.8906 27.9463 32.8906 27.5479V20.5167C32.8906 19.8603 32.3751 19.3448 31.7188 19.3448V19.3448Z"
              fill="#F26178"
            />
            <path
              d="M20.0005 13.4854L15.969 17.127L13.1567 15.6885L8.02392 10.6964C7.6958 10.3917 7.60205 9.92285 7.71924 9.47754C7.85986 9.05566 8.23478 8.75098 8.68009 8.70402L15.7817 7.67277L19.9401 7.65723L20.0005 13.4854Z"
              fill="#FFCF40"
            />
            <path
              d="M31.9764 10.6963L26.8436 15.6885L23.64 17.0009L19.9998 13.4854L19.9395 7.65723L24.2186 7.67277L31.3202 8.70402C31.7655 8.75098 32.1405 9.05566 32.2811 9.47754C32.3982 9.92277 32.3045 10.3916 31.9764 10.6963V10.6963Z"
              fill="#FFAF40"
            />
            <path
              d="M20.0005 13.4854V20.6807L13.6488 24.0087C13.2505 24.2196 12.7816 24.1963 12.4301 23.915C12.0551 23.6571 11.8676 23.2118 11.9614 22.7664L13.1567 15.6884L20.0005 13.4854Z"
              fill="#FFEA80"
            />
            <path
              d="M12.4954 5.14982L10.5385 2.45591C10.1586 1.93177 10.273 1.19935 10.7972 0.819427C11.319 0.441771 12.0537 0.551615 12.4336 1.0781L14.3906 3.77201C14.7705 4.29615 14.6561 5.02857 14.1319 5.40849C13.6056 5.79021 12.8739 5.67216 12.4954 5.14982Z"
              fill="#FFEA80"
            />
            <path
              d="M26.3223 5.46409C25.8073 5.07385 25.7043 4.33917 26.0934 3.82299L28.183 1.06042C28.5721 0.540884 29.3069 0.440181 29.8241 0.831509C30.3391 1.22174 30.4421 1.95643 30.053 2.4726L27.9634 5.23518C27.5762 5.75213 26.8405 5.85409 26.3223 5.46409Z"
              fill="#FFCF40"
            />
            <path
              d="M24.2187 7.67279L20 13.4854L15.7812 7.67279L18.9452 1.25092C19.3436 0.454121 20.6562 0.454121 21.0547 1.25092L24.2187 7.67279Z"
              fill="#FFEA80"
            />
            <path
              d="M24.2187 7.67277L21.0547 1.2509C20.8555 0.852539 20.4277 0.65332 20 0.65332V13.4854L24.2187 7.67277Z"
              fill="#FFCF40"
            />
          </svg>
          <h2>Top Sellers</h2>
        </span>
        <div className={s.more}>
          <Select
            control={control}
            name="currency"
            options={[
              {
                value: "usdc",
                label: "USDC",
              },
              {
                value: "eth",
                label: "ETH",
              },
              {
                value: "btc",
                label: "BTC",
              },
            ]}
            defaultValue="usdc"
          />
          <Select
            control={control}
            name="dateRange"
            options={[
              {
                value: "1",
                label: "Last 1 day",
              },
              {
                value: "7",
                label: "Last 7 day",
              },
              {
                value: "30",
                label: "Last 30 day",
              },
            ]}
            defaultValue="1"
          />
        </div>
      </div>
      <div className={`${s.content} ${s.sellers}`}>
        {sellers.map((seller, i) => (
          <Seller key={i} seller={seller} />
        ))}
      </div>
    </div>
  );
}
const Seller = ({ seller }) => {
  return (
    <div className={s.seller}>
      <img src={seller.benner} className={s.sellerBenner} />
      <div className={s.sellerDetail}>
        <div className={s.sellerProfilePic}>
          <img src={seller.profileImg} />
          <RankBadge rank={seller.rank} />
        </div>
        <div className={s.detail}>
          <Link href="/">
            <a>{seller.name}</a>
          </Link>
          <span className={s.usdc}>{seller.usdc} USDC</span>
        </div>
      </div>
    </div>
  );
};
