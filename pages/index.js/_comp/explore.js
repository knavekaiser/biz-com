import React, { useState, useEffect } from "react";
import { RankBadge } from "components/svg";
import { Select } from "components/elements";
import { ProductThumb } from "./product";
import { useForm } from "react-hook-form";
import s from "./styles/landingPage.module.scss";

const products = [
  {
    animated: true,
    favorite: 50,
    img:
      "https://images.unsplash.com/photo-1555443805-658637491dd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fGNyeXB0byUyMGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Official Cryptomon PepeHoeH",
    price: 0.0669,
    currency: "WETH",
    seller: {
      name: "Official Cryptomon",
      profileImg:
        "https://images.unsplash.com/photo-1612487528505-d2338264c821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    benner:
      "https://images.unsplash.com/photo-1604782206219-3b9576575203?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    multiple: true,
    favorite: 50,
    img:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwY3J5cHRvJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Official Cryptomon PepeHoeH",
    price: 0.0669,
    currency: "WETH",
    seller: {
      name: "Official Cryptomon",
      profileImg:
        "https://images.unsplash.com/photo-1612487528505-d2338264c821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    benner:
      "https://images.unsplash.com/photo-1604782206219-3b9576575203?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    animated: true,
    favorite: 50,
    img:
      "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZXJuJTIwY3J5cHRvJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Official Cryptomon PepeHoeH",
    price: 0.0669,
    currency: "WETH",
    seller: {
      name: "Official Cryptomon",
      profileImg:
        "https://images.unsplash.com/photo-1612487528505-d2338264c821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    benner:
      "https://images.unsplash.com/photo-1604782206219-3b9576575203?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    multiple: true,
    favorite: 50,
    img:
      "https://images.unsplash.com/photo-1581343109297-b0723710832b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fG1vZGVybiUyMGNyeXB0byUyMGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Official Cryptomon PepeHoeH",
    price: 0.0669,
    currency: "WETH",
    seller: {
      name: "Official Cryptomon",
      profileImg:
        "https://images.unsplash.com/photo-1612487528505-d2338264c821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    benner:
      "https://images.unsplash.com/photo-1604782206219-3b9576575203?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    favorite: 50,
    img:
      "https://images.unsplash.com/photo-1591994843349-f415893b3a6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM4fHxtb2Rlcm4lMjBjcnlwdG8lMjBhcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Official Cryptomon PepeHoeH",
    price: 0.0669,
    currency: "WETH",
    seller: {
      name: "Official Cryptomon",
      profileImg:
        "https://images.unsplash.com/photo-1612487528505-d2338264c821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    benner:
      "https://images.unsplash.com/photo-1604782206219-3b9576575203?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    animated: true,
    favorite: 50,
    img:
      "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE4fHxjcnlwdG8lMjBhcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Official Cryptomon PepeHoeH",
    price: 0.0669,
    currency: "WETH",
    seller: {
      name: "Official Cryptomon",
      profileImg:
        "https://images.unsplash.com/photo-1612487528505-d2338264c821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    benner:
      "https://images.unsplash.com/photo-1604782206219-3b9576575203?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    animated: true,
    favorite: 50,
    img:
      "https://images.unsplash.com/photo-1578321272125-4e4c4c3643c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEzfHxjcnlwdG8lMjBhcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Official Cryptomon PepeHoeH",
    price: 0.0669,
    currency: "WETH",
    seller: {
      name: "Official Cryptomon",
      profileImg:
        "https://images.unsplash.com/photo-1612487528505-d2338264c821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    benner:
      "https://images.unsplash.com/photo-1604782206219-3b9576575203?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    multiple: true,
    favorite: 50,
    img:
      "https://images.unsplash.com/photo-1580130732478-4e339fb6836f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE1fHxjcnlwdG8lMjBhcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Official Cryptomon PepeHoeH",
    price: 0.0669,
    currency: "WETH",
    seller: {
      name: "Official Cryptomon",
      profileImg:
        "https://images.unsplash.com/photo-1612487528505-d2338264c821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    benner:
      "https://images.unsplash.com/photo-1604782206219-3b9576575203?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    animated: true,
    favorite: 50,
    img:
      "https://images.unsplash.com/photo-1512413914633-b5043f4041ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fGNyeXB0byUyMGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Official Cryptomon PepeHoeH",
    price: 0.0669,
    currency: "WETH",
    seller: {
      name: "Official Cryptomon",
      profileImg:
        "https://images.unsplash.com/photo-1612487528505-d2338264c821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    benner:
      "https://images.unsplash.com/photo-1604782206219-3b9576575203?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    favorite: 50,
    img:
      "https://images.unsplash.com/photo-1501472312651-726afe119ff1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE3fHxtb2Rlcm4lMjBjcnlwdG8lMjBhcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Official Cryptomon PepeHoeH",
    price: 0.0669,
    currency: "WETH",
    seller: {
      name: "Official Cryptomon",
      profileImg:
        "https://images.unsplash.com/photo-1612487528505-d2338264c821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    benner:
      "https://images.unsplash.com/photo-1604782206219-3b9576575203?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    favorite: 50,
    img:
      "https://images.unsplash.com/photo-1542194627-35fb6de8a829?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fG1vZGVybiUyMGNyeXB0byUyMGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Official Cryptomon PepeHoeH",
    price: 0.0669,
    currency: "WETH",
    seller: {
      name: "Official Cryptomon",
      profileImg:
        "https://images.unsplash.com/photo-1612487528505-d2338264c821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    benner:
      "https://images.unsplash.com/photo-1604782206219-3b9576575203?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    favorite: 50,
    img:
      "https://images.unsplash.com/photo-1561839561-b13bcfe95249?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fG1vZGVybiUyMGNyeXB0byUyMGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Official Cryptomon PepeHoeH",
    price: 0.0669,
    currency: "WETH",
    seller: {
      name: "Official Cryptomon",
      profileImg:
        "https://images.unsplash.com/photo-1612487528505-d2338264c821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    benner:
      "https://images.unsplash.com/photo-1604782206219-3b9576575203?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    animated: true,
    favorite: 50,
    img:
      "https://images.unsplash.com/photo-1578406843598-34a4518d168d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fGNyeXB0byUyMGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Official Cryptomon PepeHoeH",
    price: 0.0669,
    currency: "WETH",
    seller: {
      name: "Official Cryptomon",
      profileImg:
        "https://images.unsplash.com/photo-1612487528505-d2338264c821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    benner:
      "https://images.unsplash.com/photo-1604782206219-3b9576575203?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    multiple: true,
    favorite: 50,
    img:
      "https://images.unsplash.com/photo-1506792006437-256b665541e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTB8fGNyeXB0byUyMGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Official Cryptomon PepeHoeH",
    price: 0.0669,
    currency: "WETH",
    seller: {
      name: "Official Cryptomon",
      profileImg:
        "https://images.unsplash.com/photo-1612487528505-d2338264c821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    benner:
      "https://images.unsplash.com/photo-1604782206219-3b9576575203?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    favorite: 50,
    img:
      "https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODZ8fGNyeXB0byUyMGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Official Cryptomon PepeHoeH",
    price: 0.0669,
    currency: "WETH",
    seller: {
      name: "Official Cryptomon",
      profileImg:
        "https://images.unsplash.com/photo-1612487528505-d2338264c821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    benner:
      "https://images.unsplash.com/photo-1604782206219-3b9576575203?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    favorite: 50,
    img:
      "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fGNyeXB0byUyMGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Official Cryptomon PepeHoeH",
    price: 0.0669,
    currency: "WETH",
    seller: {
      name: "Official Cryptomon",
      profileImg:
        "https://images.unsplash.com/photo-1612487528505-d2338264c821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    benner:
      "https://images.unsplash.com/photo-1604782206219-3b9576575203?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    animated: true,
    favorite: 50,
    img:
      "https://images.unsplash.com/photo-1492037766660-2a56f9eb3fcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZXJuJTIwY3J5cHRvJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "Official Cryptomon PepeHoeH",
    price: 0.0669,
    currency: "WETH",
    seller: {
      name: "Official Cryptomon",
      profileImg:
        "https://images.unsplash.com/photo-1612487528505-d2338264c821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    benner:
      "https://images.unsplash.com/photo-1604782206219-3b9576575203?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    animated: true,
    favorite: 50,
    img:
      "https://images.unsplash.com/photo-1576773689115-5cd2b0223523?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODJ8fGNyeXB0byUyMGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Official Cryptomon PepeHoeH",
    price: 0.0669,
    currency: "WETH",
    seller: {
      name: "Official Cryptomon",
      profileImg:
        "https://images.unsplash.com/photo-1612487528505-d2338264c821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    benner:
      "https://images.unsplash.com/photo-1604782206219-3b9576575203?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    favorite: 50,
    img:
      "https://images.unsplash.com/photo-1578321272066-408f68f92cf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA3fHxjcnlwdG8lMjBhcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Official Cryptomon PepeHoeH",
    price: 0.0669,
    currency: "WETH",
    seller: {
      name: "Official Cryptomon",
      profileImg:
        "https://images.unsplash.com/photo-1612487528505-d2338264c821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    benner:
      "https://images.unsplash.com/photo-1604782206219-3b9576575203?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    favorite: 50,
    img:
      "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA5fHxjcnlwdG8lMjBhcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Official Cryptomon PepeHoeH",
    price: 0.0669,
    currency: "WETH",
    seller: {
      name: "Official Cryptomon",
      profileImg:
        "https://images.unsplash.com/photo-1612487528505-d2338264c821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    benner:
      "https://images.unsplash.com/photo-1604782206219-3b9576575203?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZXJuJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];

export default function Explore() {
  const [filter, setFilters] = useState("");
  const { control } = useForm();
  return (
    <div className={`${s.shelf} ${s.explore}`}>
      <div className={s.shelfHead}>
        <span className={s.shelfTitle}>
          <svg
            width="30"
            height="39"
            viewBox="0 0 30 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.11201 12.2287C5.93388 14.1287 5.80888 17.4912 6.93076 18.9225C6.93076 18.9225 6.40263 15.2287 11.137 10.5943C13.0433 8.7287 13.4839 6.1912 12.8183 4.28808C12.4401 3.20995 11.7495 2.31933 11.1495 1.69745C10.7995 1.33183 11.0683 0.728704 11.5776 0.750579C14.6589 0.888079 19.6526 1.74433 21.7745 7.06933C22.7058 9.40683 22.7745 11.8225 22.3308 14.2787C22.0495 15.8475 21.0495 19.335 23.3308 19.7631C24.9589 20.0693 25.7464 18.7756 26.0995 17.8443C26.2464 17.4568 26.7558 17.36 27.0308 17.6693C29.7808 20.7975 30.0151 24.4818 29.4464 27.6537C28.3464 33.785 22.137 38.2475 15.9683 38.2475C8.262 38.2475 2.12763 33.8381 0.537005 25.8568C-0.10362 22.635 0.221381 16.26 5.19013 11.76C5.55888 11.4225 6.16201 11.7225 6.11201 12.2287Z"
              fill="url(#paint0_radial_3202_682)"
            />
            <path
              d="M18.7846 23.6912C15.944 20.0349 17.2158 15.863 17.9127 14.2005C18.0065 13.9818 17.7565 13.7755 17.5596 13.9099C16.3377 14.7412 13.8346 16.6974 12.669 19.4505C11.0908 23.1724 11.2033 24.9943 12.1377 27.2193C12.7002 28.5599 12.0471 28.8443 11.719 28.8943C11.4002 28.9443 11.1065 28.7318 10.8721 28.5099C10.1978 27.8626 9.71735 27.0402 9.48459 26.1349C9.43459 25.9412 9.18146 25.888 9.06584 26.0474C8.19084 27.2568 7.73771 29.1974 7.71584 30.5693C7.64709 34.8099 11.1502 38.2474 15.3877 38.2474C20.7283 38.2474 24.619 32.3412 21.5502 27.4037C20.6596 25.9662 19.8221 25.0255 18.7846 23.6912Z"
              fill="url(#paint1_radial_3202_682)"
            />
            <defs>
              <radialGradient
                id="paint0_radial_3202_682"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(14.4419 38.3446) rotate(-179.751) scale(22.0586 36.1938)"
              >
                <stop offset="0.314" stopColor="#FF9800" />
                <stop offset="0.662" stopColor="#FF6D00" />
                <stop offset="0.972" stopColor="#F44336" />
              </radialGradient>
              <radialGradient
                id="paint1_radial_3202_682"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(15.6815 16.3907) rotate(90.5787) scale(23.0801 17.3695)"
              >
                <stop offset="0.214" stopColor="#FFF176" />
                <stop offset="0.328" stopColor="#FFF27D" />
                <stop offset="0.487" stopColor="#FFF48F" />
                <stop offset="0.672" stopColor="#FFF7AD" />
                <stop offset="0.793" stopColor="#FFF9C4" />
                <stop offset="0.822" stopColor="#FFF8BD" stopOpacity="0.804" />
                <stop offset="0.863" stopColor="#FFF6AB" stopOpacity="0.529" />
                <stop offset="0.91" stopColor="#FFF38D" stopOpacity="0.209" />
                <stop offset="0.941" stopColor="#FFF176" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
          <h2>Explore</h2>
        </span>
        <div className={s.more}>
          <Filters
            filters={[
              { label: "All", value: "" },
              { label: "Digital Art", value: "digitalArt" },
              { label: "Anime/Animation", value: "anime/animation" },
              { label: "E-Sport", value: "eSport" },
              { label: "Music", value: "music" },
              { label: "Film/TV", value: "filmTv" },
              { label: "Gaming", value: "gaming" },
            ]}
            onChange={(filters) => setFilters(filters)}
          />
          <span className={s.devider} />
          <Select
            defaultValue="popular"
            control={control}
            name="sort"
            options={[
              { label: "Popularity", value: "popular" },
              { label: "$-$$", value: "price-asc" },
              { label: "$$-$", value: "price-dsc" },
            ]}
          />
        </div>
      </div>
      <div className={`${s.content} ${s.products}`}>
        {products.map((product, i) => (
          <ProductThumb key={i} product={product} />
        ))}
      </div>
    </div>
  );
}
const Filters = ({ onChange, filters }) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    onChange?.(value);
  }, [value]);
  return (
    <ul className={s.filters}>
      {filters.map((item) => (
        <li
          className={`chip ${item.value === value ? "selected" : ""}`}
          key={item.value}
          onClick={() => setValue(item.value)}
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
};
