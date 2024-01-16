"use client"
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Навыки",
        id: "Навыки",
        content: (
            <ul className="list-disc pl-2">
                <li>Python</li>
                <li>MySQL</li>
                <li>PostgreSQL</li>
                <li>Power Bi</li>
                <li>Data Lens</li>
                <li>Google BigQuery</li>
            </ul>
        ),
    },
    {
        title: "Образование",
        id: "Образование",
        content: (
            <ul className="list-disc pl-2">
                <li>Университет Искусственного интеллекта </li>
                <li>Высшая Школа Экономики</li>
            </ul>
        ),
    },
    {
        title: "Сертификаты",
        id: "Сертификаты",
        content: (
            <ul className="list-disc pl-2">
                <li>Победитель Хакатонов по Data Science</li>
                <li>Google Professional Cloud Developer</li>
            </ul>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("Навыки");
    const [isPending, startTranstion,] = useTransition();

    const handleTabCHange = (id) => {
        startTranstion(() => {
            setTab(id)
        });
    };

    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py=16 xl:py-16">
                <Image src="/images/about-image.png" width={500} height={500} />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-6">Обо мне</h2>
                    <p className="text-base lg:text-lg">
                        Добро пожаловать в мир данных высшего уровня!
                        Меня зовут Александр Осипов, и я профессиональный Data Analyst и Data Scientist. С многолетним опытом работы в крупных международных компаниях, таких как Latoken и Metro Cash and Carry, я предлагаю вам взглянуть на увлекательный мир данных через призму моих курсов. Мой технологический стек включает в себя PSQL, MySQL, Python, Google BigQuery (GBQ), LookerStudio и Power BI. Давайте вместе создадим путь к владению анализом данных и достигнем новых вершин в вашем карьерном росте!
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabCHange("Навыки")}
                            active={tab == "Навыки"}
                        >
                            {" "}
                            Навыки {" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabCHange("Образование")}
                            active={tab == "Образование"}
                        >
                            {" "}
                            Образование {" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabCHange("Сертификаты")}
                            active={tab == "Сертификаты"}
                        >
                            {" "}
                            Сертификация {" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
