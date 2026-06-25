import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Calculator,
  Check,
  Clock3,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  SlidersHorizontal,
  Truck,
  Wrench,
} from "lucide-react";

const phone = "+7 (473) 000-00-00";
const phoneHref = "tel:+74730000000";
const email = "service@example-voronezh.ru";

const categories = [
  {
    title: "Коммерческий транспорт",
    text: "Комплекты для Газели, Соболя, фургонов, микроавтобусов и развозных машин.",
    price: "от 48 000 ₽",
  },
  {
    title: "Легковые авто и SUV",
    text: "Подбор решений для комфорта, регулировки клиренса и стабильности на загрузке.",
    price: "от 62 000 ₽",
  },
  {
    title: "Прицепы и спецтехника",
    text: "Усиление подвески под перевозку оборудования, инструмента и нестандартных грузов.",
    price: "по расчету",
  },
];

const services = [
  "подбор комплекта под массу, кузов и сценарии эксплуатации",
  "установка пневмобаллонов, магистралей, ресивера и управления",
  "диагностика утечек, замена фитингов, клапанов и компрессоров",
  "регулировка давления и обучение владельца после монтажа",
];

const steps = [
  "Вы описываете автомобиль, загрузку и задачу.",
  "Мы подбираем конфигурацию и считаем цену.",
  "Согласуем дату установки в Воронеже.",
  "Вы получаете готовый автомобиль и рекомендации по давлению.",
];

const products = [
  {
    name: "Базовый комплект усиления",
    fit: "Для регулярной загрузки до среднего уровня",
    includes: "баллоны, кронштейны, магистраль, фитинги",
  },
  {
    name: "Комплект с компрессором",
    fit: "Для быстрой регулировки давления из салона",
    includes: "компрессор, кнопки, манометр, проводка",
  },
  {
    name: "Двухконтурное управление",
    fit: "Для выравнивания машины по сторонам",
    includes: "раздельные контуры, клапаны, защита магистралей",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Пневмоподвеска Воронеж">
          <span className="brand-mark">A</span>
          <span>
            <strong>AirRide Voronezh</strong>
            <small>пневмоподвеска и сервис</small>
          </span>
        </a>
        <nav aria-label="Основная навигация">
          <a href="#catalog">Каталог</a>
          <a href="#service">Установка</a>
          <a href="#prices">Цены</a>
          <a href="#contacts">Контакты</a>
        </nav>
        <a className="header-phone" href={phoneHref}>
          <Phone size={18} aria-hidden />
          {phone}
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Воронеж и Воронежская область</p>
          <h1>Пневмоподвеска под ваш автомобиль и реальные нагрузки</h1>
          <p className="lead">
            Подбираем, продаем, устанавливаем и обслуживаем комплекты для
            коммерческого транспорта, легковых авто, прицепов и спецтехники.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#contacts">
              Рассчитать комплект
              <ArrowRight size={18} aria-hidden />
            </a>
            <a className="button secondary" href={phoneHref}>
              Позвонить мастеру
            </a>
          </div>
          <dl className="hero-stats" aria-label="Преимущества">
            <div>
              <dt>1 день</dt>
              <dd>типовой монтаж</dd>
            </div>
            <div>
              <dt>12 мес.</dt>
              <dd>гарантия на работы</dd>
            </div>
            <div>
              <dt>473</dt>
              <dd>городской код Воронежа</dd>
            </div>
          </dl>
        </div>
        <div className="hero-media" aria-label="Автосервис пневмоподвески">
          <Image
            src="/images/hero-workshop.png"
            alt="Монтаж пневмоподвески в сервисной зоне"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 52vw"
          />
        </div>
      </section>

      <section className="trust-band" aria-label="Ключевые услуги">
        <div>
          <Truck size={22} aria-hidden />
          <span>Подбор под груз и кузов</span>
        </div>
        <div>
          <Wrench size={22} aria-hidden />
          <span>Монтаж и ремонт</span>
        </div>
        <div>
          <ShieldCheck size={22} aria-hidden />
          <span>Гарантия на работы</span>
        </div>
        <div>
          <SlidersHorizontal size={22} aria-hidden />
          <span>Ручное или автоматическое управление</span>
        </div>
      </section>

      <section className="section" id="catalog">
        <div className="section-heading">
          <p className="eyebrow">Каталог направлений</p>
          <h2>Комплекты пневмоподвески в Воронеже</h2>
          <p>
            Витрина собрана под быстрый расчет: клиент выбирает тип транспорта,
            а менеджер уточняет оси, загрузку, желаемый уровень управления и
            бюджет.
          </p>
        </div>
        <div className="category-grid">
          {categories.map((item) => (
            <article className="category-card" key={item.title}>
              <div className="card-icon">
                <Truck size={24} aria-hidden />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <strong>{item.price}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section split" id="service">
        <div>
          <p className="eyebrow">Сервис и установка</p>
          <h2>Работаем не по шаблону, а по задаче автомобиля</h2>
          <p>
            Для одинаковых моделей условия эксплуатации могут отличаться:
            развозка по городу, межгород, инструментальная мастерская, прицеп
            или постоянная перевозка оборудования. Поэтому расчет начинается с
            нагрузки и маршрутов.
          </p>
          <ul className="check-list">
            {services.map((service) => (
              <li key={service}>
                <Check size={18} aria-hidden />
                {service}
              </li>
            ))}
          </ul>
        </div>
        <div className="process-panel">
          <h3>Как проходит заказ</h3>
          <ol>
            {steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section muted" id="prices">
        <div className="section-heading">
          <p className="eyebrow">Цены и предложения</p>
          <h2>Быстрые сценарии для расчета</h2>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <BadgeCheck size={24} aria-hidden />
              <h3>{product.name}</h3>
              <p>{product.fit}</p>
              <span>{product.includes}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section contacts" id="contacts">
        <div>
          <p className="eyebrow">Контакты</p>
          <h2>Запросите расчет комплекта под Воронеж</h2>
          <p>
            Оставьте модель автомобиля, год, тип кузова и примерную загрузку.
            Этого достаточно, чтобы подготовить первичное предложение.
          </p>
          <div className="contact-list">
            <a href={phoneHref}>
              <Phone size={20} aria-hidden />
              {phone}
            </a>
            <a href={`mailto:${email}`}>
              <Mail size={20} aria-hidden />
              {email}
            </a>
            <span>
              <MapPin size={20} aria-hidden />
              Воронеж, адрес сервиса уточняется
            </span>
            <span>
              <Clock3 size={20} aria-hidden />
              Пн-Сб: 9:00-19:00
            </span>
          </div>
        </div>
        <form className="lead-form">
          <label>
            Имя
            <input name="name" placeholder="Как к вам обращаться" />
          </label>
          <label>
            Телефон
            <input name="phone" placeholder="+7 ..." />
          </label>
          <label>
            Автомобиль и задача
            <textarea
              name="message"
              rows={4}
              placeholder="Например: Газель Next, постоянная загрузка 900 кг"
            />
          </label>
          <button className="button primary" type="button">
            <Calculator size={18} aria-hidden />
            Подготовить расчет
          </button>
          <p className="form-note">
            Форма готова к подключению к CRM, Telegram или почте.
          </p>
        </form>
      </section>

      <footer className="site-footer">
        <span>© 2026 AirRide Voronezh</span>
        <span>Пневмоподвеска, установка и сервис в Воронеже</span>
      </footer>
    </main>
  );
}
