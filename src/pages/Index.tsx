import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/162e96b5-c409-4aa4-9797-fbb8b9854f95/files/6ace0abc-8574-4729-83ca-05f51f929020.jpg";

const NAV_LINKS = [
  { label: "Возможности", href: "#features" },
  { label: "Шаблоны", href: "#templates" },
  { label: "Тарифы", href: "#pricing" },
  { label: "Отзывы", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

const FEATURES = [
  {
    icon: "MousePointerClick",
    title: "Drag & Drop редактор",
    desc: "Перетаскивайте блоки мышкой — сайт собирается как конструктор. Никакого кода.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: "Palette",
    title: "200+ готовых блоков",
    desc: "Хедеры, галереи, формы, отзывы — выберите нужный блок и настройте под себя.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: "Smartphone",
    title: "Адаптивный дизайн",
    desc: "Сайт идеально выглядит на любом устройстве — от телефона до десктопа.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: "Zap",
    title: "Быстрая загрузка",
    desc: "Сайты на mottor загружаются за доли секунды — никаких тормозов.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: "Globe",
    title: "Свой домен + SSL",
    desc: "Подключите свой домен в пару кликов. SSL-сертификат — бесплатно.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: "BarChart3",
    title: "Встроенная аналитика",
    desc: "Отслеживайте посетителей, конверсии и источники трафика прямо в панели.",
    gradient: "from-amber-500 to-orange-500",
  },
];

const TEMPLATES = [
  { name: "Лендинг для стартапа", category: "Бизнес", color: "from-purple-600 to-indigo-800" },
  { name: "Интернет-магазин", category: "E-commerce", color: "from-cyan-600 to-teal-800" },
  { name: "Портфолио дизайнера", category: "Креатив", color: "from-orange-600 to-red-800" },
  { name: "Сайт ресторана", category: "HoReCa", color: "from-green-600 to-emerald-800" },
  { name: "Блог / Медиа", category: "Контент", color: "from-pink-600 to-rose-800" },
  { name: "Сайт агентства", category: "Услуги", color: "from-blue-600 to-indigo-800" },
];

const PLANS = [
  {
    name: "Старт",
    price: "0",
    period: "навсегда",
    desc: "Для первого сайта",
    features: ["1 сайт", "Все блоки редактора", "Поддомен mottor.ru", "SSL-сертификат", "Базовая аналитика"],
    cta: "Начать бесплатно",
    popular: false,
  },
  {
    name: "Бизнес",
    price: "490",
    period: "/мес",
    desc: "Для растущего бизнеса",
    features: ["5 сайтов", "Свой домен", "Без логотипа mottor", "Расширенная аналитика", "Приоритетная поддержка", "A/B тесты"],
    cta: "Попробовать 14 дней",
    popular: true,
  },
  {
    name: "Агентство",
    price: "1 490",
    period: "/мес",
    desc: "Для команд и агентств",
    features: ["Безлимит сайтов", "White-label", "API доступ", "Командная работа", "Персональный менеджер", "SLA 99.9%"],
    cta: "Связаться с нами",
    popular: false,
  },
];

const REVIEWS = [
  {
    name: "Алексей Петров",
    role: "Основатель digital-агентства",
    text: "Перевели всех клиентов на mottor — экономим 40 часов в месяц. Раньше верстка занимала дни, теперь — часы.",
    avatar: "А",
    color: "bg-purple-500",
  },
  {
    name: "Мария Козлова",
    role: "Владелец кофейни",
    text: "Сделала сайт сама за вечер, без дизайнера и программиста. Заказы через форму пошли уже на следующий день!",
    avatar: "М",
    color: "bg-cyan-500",
  },
  {
    name: "Дмитрий Волков",
    role: "Фрилансер-дизайнер",
    text: "Наконец-то конструктор, который не ограничивает. Любой макет из Figma собирается один в один.",
    avatar: "Д",
    color: "bg-orange-500",
  },
];

const FAQS = [
  {
    q: "Нужны ли знания программирования?",
    a: "Нет! mottor — полностью визуальный конструктор. Вы собираете сайт из готовых блоков мышкой, как в презентации. Код не нужен.",
  },
  {
    q: "Можно ли подключить свой домен?",
    a: "Да, на тарифах Бизнес и Агентство. Подключение занимает 2 минуты — просто укажите домен и измените DNS-запись.",
  },
  {
    q: "Есть ли ограничения по трафику?",
    a: "На всех тарифах трафик безлимитный. Ваш сайт выдержит любое количество посетителей благодаря CDN.",
  },
  {
    q: "Можно ли перенести сайт с другого конструктора?",
    a: "Да, мы поможем перенести контент. На тарифе Агентство предоставляем бесплатный перенос с персональным менеджером.",
  },
  {
    q: "Как работает бесплатный тариф?",
    a: "Вы получаете полный доступ к редактору и всем блокам. Сайт размещается на поддомене mottor.ru с нашим логотипом внизу страницы.",
  },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
            <Icon name="Blocks" size={18} className="text-white" />
          </div>
          <span className="text-xl font-bold text-white">mottor</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10">
            Войти
          </Button>
          <Button className="gradient-bg text-white border-0 hover:opacity-90">
            Создать сайт
          </Button>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <Icon name={mobileOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass border-t border-white/10 px-6 py-4 space-y-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-white/70 hover:text-white py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 space-y-2 border-t border-white/10">
            <Button variant="ghost" className="w-full text-white/80">Войти</Button>
            <Button className="w-full gradient-bg text-white border-0">Создать сайт</Button>
          </div>
        </div>
      )}
    </header>
  );
};

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[140px]" />
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm">
            <Icon name="Sparkles" size={14} className="text-purple-400" />
            <span className="text-white/70">Powered by AI — создано 50 000+ сайтов</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
            Опиши идею —
            <br />
            <span className="gradient-text">ИИ создаст</span>
            <br />
            сайт за тебя
          </h1>

          <p className="text-lg md:text-xl text-white/50 max-w-lg leading-relaxed">
            Просто расскажи, какой сайт тебе нужен — искусственный интеллект
            сгенерирует дизайн, тексты и&nbsp;структуру. Готовый сайт за&nbsp;минуты, без кода и&nbsp;дизайнера.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="gradient-bg text-white border-0 text-base px-8 h-14 hover:opacity-90 hover:scale-105 transition-all">
              <Icon name="Rocket" size={20} className="mr-2" />
              Попробовать бесплатно
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 h-14 text-base px-8">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть демо
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-2">
            <div className="flex -space-x-3">
              {["bg-purple-500", "bg-cyan-500", "bg-orange-500", "bg-pink-500"].map((color, i) => (
                <div key={i} className={`w-10 h-10 rounded-full ${color} border-2 border-background flex items-center justify-center text-xs font-bold text-white`}>
                  {["А", "М", "К", "Д"][i]}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-white/40 mt-0.5">4.9 из 5 — 2 300+ отзывов</p>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute inset-0 gradient-bg rounded-3xl opacity-20 blur-3xl scale-95" />
          <div className="relative glass rounded-3xl p-3 glow-purple">
            <img
              src={HERO_IMAGE}
              alt="Визуальный редактор mottor"
              className="rounded-2xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                  <Icon name="TrendingUp" size={20} className="text-green-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">+340%</p>
                  <p className="text-xs text-white/50">конверсия выросла</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 glass rounded-2xl p-4 animate-float-delay">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <Icon name="Clock" size={20} className="text-purple-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">5 мин</p>
                  <p className="text-xs text-white/50">на создание сайта</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FeaturesSection = () => (
  <section id="features" className="py-24 relative">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold text-purple-400 tracking-widest uppercase mb-4">Возможности</p>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Всё для создания <span className="gradient-text">идеального сайта</span>
        </h2>
        <p className="text-lg text-white/40">
          Мощные инструменты, которые раньше были доступны только разработчикам
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURES.map((f, i) => (
          <div
            key={i}
            className="group glass rounded-2xl p-8 hover:bg-white/[0.08] transition-all duration-300 hover:-translate-y-1"
          >
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              <Icon name={f.icon} size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">{f.title}</h3>
            <p className="text-white/40 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TemplatesSection = () => (
  <section id="templates" className="py-24 relative">
    <div className="absolute inset-0">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px]" />
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold text-cyan-400 tracking-widest uppercase mb-4">Шаблоны</p>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Начните с <span className="gradient-text">готового шаблона</span>
        </h2>
        <p className="text-lg text-white/40">
          50+ профессиональных шаблонов для любой ниши. Настройте за минуты.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TEMPLATES.map((t, i) => (
          <div
            key={i}
            className="group relative rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300"
          >
            <div className={`bg-gradient-to-br ${t.color} aspect-[4/3] p-8 flex flex-col justify-between`}>
              <div className="flex items-center gap-2">
                <span className="glass rounded-full px-3 py-1 text-xs text-white/80">{t.category}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{t.name}</h3>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm text-white/70">Использовать</span>
                  <Icon name="ArrowRight" size={16} className="text-white/70" />
                </div>
              </div>
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
          Все шаблоны
          <Icon name="ArrowRight" size={18} className="ml-2" />
        </Button>
      </div>
    </div>
  </section>
);

const PricingSection = () => (
  <section id="pricing" className="py-24 relative">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold text-orange-400 tracking-widest uppercase mb-4">Тарифы</p>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Прозрачные <span className="gradient-text">цены</span>
        </h2>
        <p className="text-lg text-white/40">
          Начните бесплатно — масштабируйтесь когда будете готовы
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {PLANS.map((plan, i) => (
          <div
            key={i}
            className={`relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
              plan.popular
                ? "gradient-bg text-white glow-purple"
                : "glass"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-purple-700 text-xs font-bold px-4 py-1.5 rounded-full">
                Популярный
              </div>
            )}

            <p className={`text-sm font-semibold mb-2 ${plan.popular ? "text-white/80" : "text-white/50"}`}>{plan.desc}</p>
            <h3 className="text-2xl font-bold mb-4 text-white">{plan.name}</h3>

            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-5xl font-extrabold text-white">{plan.price}₽</span>
              <span className={`text-sm ${plan.popular ? "text-white/70" : "text-white/40"}`}>{plan.period}</span>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((f, j) => (
                <li key={j} className="flex items-center gap-3">
                  <Icon name="Check" size={16} className={plan.popular ? "text-white" : "text-green-400"} />
                  <span className={`text-sm ${plan.popular ? "text-white/90" : "text-white/60"}`}>{f}</span>
                </li>
              ))}
            </ul>

            <Button
              className={`w-full h-12 font-semibold ${
                plan.popular
                  ? "bg-white text-purple-700 hover:bg-white/90"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {plan.cta}
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ReviewsSection = () => (
  <section id="reviews" className="py-24 relative">
    <div className="absolute inset-0">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold text-green-400 tracking-widest uppercase mb-4">Отзывы</p>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Нам <span className="gradient-text">доверяют</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {REVIEWS.map((r, i) => (
          <div key={i} className="glass rounded-2xl p-8 hover:bg-white/[0.08] transition-all duration-300">
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Icon key={j} name="Star" size={14} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-white/70 leading-relaxed mb-6">«{r.text}»</p>
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full ${r.color} flex items-center justify-center text-sm font-bold text-white`}>
                {r.avatar}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{r.name}</p>
                <p className="text-xs text-white/40">{r.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQSection = () => (
  <section id="faq" className="py-24 relative">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold text-purple-400 tracking-widest uppercase mb-4">Вопросы</p>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Частые <span className="gradient-text">вопросы</span>
        </h2>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="glass rounded-2xl border-0 px-6 overflow-hidden"
            >
              <AccordionTrigger className="text-left text-white font-semibold hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-white/50 pb-5 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-24 relative">
    <div className="container mx-auto px-6">
      <div className="relative gradient-bg rounded-3xl p-12 md:p-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.15),transparent)] pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Готовы создать свой сайт?
          </h2>
          <p className="text-lg text-white/70 max-w-xl mx-auto mb-10">
            Присоединяйтесь к 50 000+ предпринимателей, которые уже создали сайт на mottor
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-700 hover:bg-white/90 h-14 text-base px-10 font-bold hover:scale-105 transition-all">
              Начать бесплатно
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
          <p className="text-sm text-white/50 mt-6">Без карты. Без ограничений по времени.</p>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-white/10 py-16">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-10 mb-12">
        <div>
          <a href="#" className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
              <Icon name="Blocks" size={18} className="text-white" />
            </div>
            <span className="text-xl font-bold text-white">mottor</span>
          </a>
          <p className="text-sm text-white/40 leading-relaxed">
            Конструктор сайтов нового поколения. Создавайте без кода, публикуйте за минуты.
          </p>
        </div>

        {[
          {
            title: "Продукт",
            links: ["Возможности", "Шаблоны", "Тарифы", "Обновления"],
          },
          {
            title: "Поддержка",
            links: ["Документация", "Видеоуроки", "Блог", "Контакты"],
          },
          {
            title: "Компания",
            links: ["О нас", "Вакансии", "Партнёрам", "Политика"],
          },
        ].map((col, i) => (
          <div key={i}>
            <p className="font-semibold text-white mb-4">{col.title}</p>
            <ul className="space-y-3">
              {col.links.map((link, j) => (
                <li key={j}>
                  <a href="#" className="text-sm text-white/40 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/30">&copy; 2026 mottor. Все права защищены.</p>
        <div className="flex items-center gap-4">
          {["Send", "MessageCircle", "Youtube"].map((icon, i) => (
            <a key={i} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/40 hover:text-white transition-colors">
              <Icon name={icon} size={18} />
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <TemplatesSection />
      <PricingSection />
      <ReviewsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;