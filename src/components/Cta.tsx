import React from "react";
import { Container } from "@/components/Container";

export const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-indigo-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            İhtiyacınıza özel çözümler için
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Hemen formu doldurun uzman ekiplerimiz size özel çözümlerle size dönüş yapalım.
          </p>
        </div>
        <div className="box flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="https://www.bakren.com"
            target="_blank"
            rel="noopener"
            className="plane inline-block py-3 mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-md px-7 lg:px-10 lg:py-5 "
          >
            Teklif Al
          </a>
        </div>
      </div>
    </Container>
  );
};
