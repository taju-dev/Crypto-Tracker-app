import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import { Crypto } from "../../CryptoContext";
import { TrendingCoins } from "../config/Api";

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Carousel = () => {
  const { currency, symbol } = useContext(Crypto);

  const [trending, setTrending] = useState([]);

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    setTrending(data);
  };
  console.log(trending);

  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  const items = trending.map((coins) => {
    let profit = coins.price_change_percentage_24h >= 0;
    return (
      <Link className="carouselItems" to={`/coins/${coins.id}`}>
        <img
          src={coins.image}
          alt={coins.name}
          height="80"
          style={{ marginBottom: 10 }}
        />
        <span>
          {coins.symbol}
          &nbsp;
          <span
            style={{
              color: profit > 0 ? "rgb(14,203,129)" : "red",
              fontWeight: 500,
            }}
          >
            {profit && "+"}
            {coins.price_change_percentage_24h.toFixed(2)}%
          </span>
        </span>
        <span>
          {symbol}
          {numberWithCommas(coins.current_price.toFixed(2))}
        </span>
      </Link>
    );
  });

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 5,
    },
  };

  return (
    <div className="carousel">
      <AliceCarousel
        mouseTracking
        infinite
        animationDuration={1500}
        autoPlayInterval={1000}
        autoPlay
        responsive={responsive}
        disableDotsControls
        disableButtonsControls
        items={items}
      />
    </div>
  );
};

export default Carousel;
