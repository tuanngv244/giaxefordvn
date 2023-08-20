import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ServiceCard } from "@/components/ServiceCard";
import { SmartFeature } from "@/components/SmartFeature";
import { IService } from "@/models/services";
import fsPromises from "fs/promises";
import { InferGetServerSidePropsType } from "next";
import path from "path";
import React, { useState } from "react";

export async function getStaticProps() {
  const serviceFilePath = path.join(
    process.cwd(),
    "src/pages/api/services.json"
  );
  const serviceJsonData = await fsPromises.readFile(serviceFilePath);

  const serviceData = JSON.parse(serviceJsonData as any);

  return {
    props: {
      services: serviceData?.services as IService[],
    },
  };
}

export default function Service(
  props: InferGetServerSidePropsType<typeof getStaticProps>
) {
  const { services } = props;

  const textSection = `text-main relative text-uppercase text-5xl my-0  after after:absolute after:top-[50%] after:left-[20%] after:translate-y-[-50%] after:content-[''] after:w-[20rem] after:h-[0.1rem] after:bg-main before:absolute before:top-[50%] before:right-[20%] before:translate-y-[-50%] before:content-[''] before:w-[20rem] before:h-[0.1rem] before:bg-main mobile:after:opacity-0 mobile:before:opacity-0 tablet:after:opacity-100 tablet:before:opacity-100 `;

  const [is, setIs] = useState(false);

  return (
    <React.Fragment>
      <Header />
      <SmartFeature />
      <main className="max-w-9/10 mx-auto ">
        <section className="flex flex-col text-center my-[10rem]">
          <h3 className={textSection}>Hỗ trợ khi mua xe</h3>
          <div className="grid mobile:grid-cols-1  tablet:grid-cols-2 mobile:gap-[2rem] tablet:gap-[5rem] mt-[2rem]">
            {services &&
              services.map((service) => {
                return <ServiceCard key={service.id} data={service} />;
              })}
          </div>
        </section>
        {is && (
          <iframe
            style={{ width: "1000px", height: "1000px" }}
            src="https://affiliate.ivie.vn"
          />
        )}
        <button
          onClick={() => {
            setIs(!is);
          }}
        >
          view
        </button>
      </main>

      <Footer />
    </React.Fragment>
  );
}
