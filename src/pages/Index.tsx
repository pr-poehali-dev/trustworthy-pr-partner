import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import pptxgen from 'pptxgenjs';

const Index = () => {
  const [isExporting, setIsExporting] = useState(false);

  const marketPoints = [
    'Российский рынок сегодня – это более 80 миллионов активных потребителей',
    'После 2022 года на российском рынке освободились ниши – реальные возможности для новых производителей',
    'Жители России готовы пробовать товары и услуги из дружественных стран – если они понятны и вызывают доверие',
    'Продукция из СНГ, Азии и Ближнего Востока воспринимается как "свое, родное"'
  ];

  const cities = [
    { name: 'Ижевск', description: 'Мощный промышленный кластер, оружейная столица России' },
    { name: 'Казань', description: 'Исторический перекресток культур и технологий' },
    { name: 'Екатеринбург', description: 'Промышленное сердце и деловая столица Урала' },
    { name: 'Новосибирск', description: 'Научный и логистический хаб Сибири' },
    { name: 'Краснодар', description: 'Аграрный и курортный центр Юга' },
    { name: 'Нижний Новгород', description: 'Индустриальный кластер Поволжья' },
    { name: 'Ростов-на-Дону', description: '«ворота Кавказа» и крупный транспортный узел' }
  ];

  const services = [
    { title: 'СТРАТЕГИЯ И ВЫХОД НА РЫНОК', description: 'Анализ ЦА, позиционирование, рекламные кампании' },
    { title: 'КОНТЕНТ И КОММУНИКАЦИИ', description: 'Подготовка текстов, фото, видео и SMM под российскую аудиторию' },
    { title: 'PR и GR', description: 'Публикации в СМИ, работа с экспертами и блогерами' },
    { title: 'ПРОДАКШН', description: 'Видео и аудио: от Reels до имиджевых фильмов. Собственная студия и команда профессионалов' },
    { title: 'МЕДИАЗАКУПКИ', description: 'ТВ, радио, digital, наружка. Единое окно и полный контроль рекламной кампании и подрядчиков' },
    { title: 'АНАЛИТИКА', description: 'Прозрачная отчётность по охватам, лидам и продажам в реальном времени' }
  ];

  const advantages = [
    { title: '19-летний опыт', text: 'Работы в маркетинге, контенте, аналитике, PR и GR. Знаем, как продвигаться в субъектах РФ' },
    { title: 'Собственная команда', text: 'Копирайтеры, дизайнеры, операторы, SMM-специалисты, продюсеры, продакшн' },
    { title: 'Есть свои медиа', text: 'Радиостанции, онлайн-СМИ, соцсети, прямой доступ к федеральным СМИ' },
    { title: '"Единое окно"', text: 'При продвижении – ведем клиентов комплексно' },
    { title: 'Прозрачность и контроль', text: 'Четкое согласование целей, регулярная отчётность по KPI' },
    { title: 'Гибкие форматы', text: 'Мы мобильнее и быстрее, чем крупные федеральные агентства' }
  ];

  const cases = [
    {
      title: 'Организация федерального блог-тура для раскрытия потенциала региона',
      task: 'Организовать блог-тур для федеральных инфлюенсеров, чтобы сформировать новый, привлекательный образ республики как туристического направления.',
      solution: 'Отобрали 10 релевантных блогеров (общая аудитория 1 млн+). Организовали трехдневный тур «под ключ»: логистика, уникальная программа, встречи с Главой республики, решение всех организационных вопросов, полное сопровождение блогеров по маршруту, проверка материалов.',
      result: 'Получили более 70 публикаций на площадках блогеров, более 400+ тыс. просмотров, живой отклик активной аудитории. Превысили KPI в 3.5 раза.'
    },
    {
      title: 'Разработка бренд-платформы и дизайна упаковки для пельменей',
      task: 'Подготовить бренд-производителя пельменей к масштабированию и выходу в федеральные торговые сети. Требовалось создать сильную, конкурентную айдентику и дизайн упаковки, соответствующий стандартам крупного ритейла.',
      solution: 'Провели глубокий анализ рынка и конкурентов в сегменте. Разработали с нуля логотип, фирменный стиль и брендбук. Подготовили три варианта дизайна упаковки (формат «флоупак с клипсой»), провели профессиональную съёмку продукции. Предложили варианты названия и слогана.',
      result: 'Клиент получил полный пакет бренд-активов, готовый к производству и печати: логотип, утверждённый дизайн упаковки и брендбук для последующего использования.'
    },
    {
      title: 'Продвижение региона на главной выставке страны',
      task: 'Обеспечить федеральное медиапокрытие участия Удмуртии в масштабной выставке «Россия» на ВДНХ и привлечь внимание туристов, инвесторов и партнёров к региону.',
      solution: 'В течение 8 месяцев работали как единая пресс-служба республики: подготовили и распространили 250+ пресс-релизов, сняли 48 видеороликов, провели 21 онлайн-трансляцию, опубликовали 150+ материалов в собственных медиа и 250+ постов в соцсетях. Вся работа велась в тесной связке с Правительством Удмуртии.',
      result: 'Более 1 млн посетителей прошли через стенд Удмуртии на ВДНХ, 14 млн охватов в медиа и соцсетях, 700+ публикаций, персональные благодарности от Главы и Правительства Удмуртии.'
    },
    {
      title: 'PR-кампания Всероссийского хоккейного марафона',
      task: 'Организовать федеральное освещение Всероссийского марафона дворового хоккея в 30+ регионах — без бюджета на рекламу и при минимальной команде клиента.',
      solution: 'За 6 недель до старта взяли на себя функции внешней пресс-службы: подготовили шаблоны, письма, медиаплан, собрали базы СМИ в каждом из 30+ регионов, провели 3 волны рассылок, организовали онлайн-пресс-конференцию и брифинг.',
      result: '30+ регионов охвачено, 100+ новостей в СМИ без оплаты, 300+ постов в соцсетях, 810 тыс. просмотров, 3 000+ участников, внедрен хештег #ВХоккейМожетИгратьКаждый.'
    },
    {
      title: 'Создание имиджевого видеоролика для продвижения региона',
      task: 'Создать яркий, запоминающийся ролик, который за 3 минуты представит потенциал Удмуртии на всю страну. Клиент: Правительство Удмуртии, проект для выставки-форума «Россия» на ВДНХ.',
      solution: 'Разработали уникальную концепцию с ключевым визуальным образом – девушкой-символом региона. Провели съёмки, добавили графику и национальное аудио оформление.',
      result: 'Ролик набрал более 55 000+ просмотров на официальной странице Главы региона за первый же день! Всего его посмотрели более 500 тысяч раз.'
    },
    {
      title: 'Организация инфлюенс-кампании для лакокрасочного завода',
      task: 'Повысить узнаваемость бренда за счет размещения у блогеров.',
      solution: 'Отобрали релевантных блогеров в нишах DIY и ремонта. Организовали всё «под ключ»: подбор инфлюенсеров, переговоры, закупку краски, доставку, съёмки, согласование контента, настроили UTM-отслеживание на OZON.',
      result: 'Повышение продаж на маркетплейсах, рост поисковых запросов по отдельным маркам до 200%, в целом по бренду – на 22%.'
    },
    {
      title: 'Видеоролики для привлечения экспортеров',
      task: 'Показать экспортерам, что их товары могут быть востребованы за рубежом. Клиент: Центр поддержки экспорта Корпорации развития Удмуртии.',
      solution: 'Создали серию из игровых видеороликов с героями – жителями ОАЭ, Японии, Италии и Узбекистана. Для каждой страны разработали отдельную историю с учётом менталитета. Реализовали два ролика «под ключ».',
      result: 'Готовые ролики используются в digital-продвижении, на выставках и при работе с партнерами.'
    }
  ];

  const problems = [
    'Культурными барьерами и ошибками в коммуникации',
    'Непониманием локальных медиаканалов и поведения аудитории',
    'Неэффективным расходованием 30–50% бюджета из-за отсутствия стратегии',
    'Потерей времени, лидов и доверия при самостоятельном заходе',
    'Отсутствием прозрачности в медиазакупках и доступа к региональным СМИ',
    'Сложностью выбора надёжного партнёра без «чёрных ящиков»'
  ];

  const solutions = [
    'Глубокая локализация под менталитет и поведение ЦА в 80+ городах',
    '19 лет опыта — мы знаем, где клиенты теряют бюджет, и как этого избежать',
    'Полный цикл «под ключ» — от анализа до первых продаж',
    'Регулярная отчётность и контроль каждого этапа',
    'Прямые контакты со СМИ — без посредников, с четкими условиями',
    'Прозрачный медиаплан с фиксацией KPI до старта'
  ];

  const detailedServices = [
    {
      title: 'Стратегия и выход на рынок',
      items: [
        'Анализ рынка, ёмкости, трендов',
        'Сегментация ЦА и построение Customer Journey Map (CJM)',
        'Позиционирование бренда с учётом культурных кодов регионов'
      ]
    },
    {
      title: 'Контент и креатив',
      items: [
        'Разработка креативной концепции и бренд-платформы',
        'Локализация и адаптация контента под российскую аудиторию',
        'Создание текстов, фото, инфографики, SMM-контента, аудио',
        'Написание сценариев и технических заданий для рекламы'
      ]
    },
    {
      title: 'Аудио и видеопродакшн',
      items: [
        'Имиджевые и продающие ролики (от Reels до 3-минутных фильмов)',
        'Съёмки на выезде (в том числе в регионах) и в студии',
        'Полный цикл: идея → сценарий → съёмка → монтаж → дистрибуция'
      ]
    },
    {
      title: 'Digital и SMM',
      items: [
        'Запуск и ведение кампаний в соцсетях',
        'Таргетированная и контекстная реклама',
        'Лидогенерация, трафик на маркетплейсы и сайт'
      ]
    },
    {
      title: 'PR и работа со СМИ',
      items: [
        'Подготовка и распространение пресс-релизов',
        'Организация публикаций в федеральных и региональных СМИ',
        'Работа с экспертами, блогерами, лидерами мнений'
      ]
    },
    {
      title: 'Медиазакупки и оффлайн',
      items: [
        'Планирование и закупка размещений в ТВ, радио, наружной',
        'Комплексные кампании «оффлайн + digital»'
      ]
    }
  ];

  const packages = [
    {
      title: 'Пакет 1: Исследования и выход на рынок',
      description: 'Для компаний, впервые выходящих на российский рынок. Включает анализ ниши, конкурентов, ЦА, формирование позиционирования и медиаплана.',
      duration: '3–4 недели',
      investment: 'от 1 500 до 2 500 €'
    },
    {
      title: 'Пакет 2: Запуск цифрового промо и SMM',
      description: 'Для быстрого старта кампаний информирования и лидогенерации. Включает стратегию, медиа-микс, контент, ведение соцсетей и видео.',
      duration: '3 месяца',
      investment: 'от 3 000 до 8 000 €/мес'
    },
    {
      title: 'Пакет 3: Контент и рассказывание историй',
      description: 'Для глубокого погружения в аудиторию через эмоциональные, локализованные истории. Включает разработку концепции, производство, локализацию и дистрибуцию.',
      duration: '8–12 недель',
      investment: 'от 2 500 до 6 000 €'
    },
    {
      title: 'Пакет 4: Видеопродакшн для экспортных кампаний',
      description: 'Создание высококачественных видеоматериалов: бренд-фильмы, демонстрации продукта, отзывы, экспертные интервью.',
      duration: '4–8 недель',
      investment: 'от 2 500 до 15 000+ €'
    },
    {
      title: 'Пакет 5: PR и СМИ в регионах России',
      description: 'Построение репутации через публикации в федеральных и региональных СМИ. Включает пресс-релизы, интервью, аналитику охватов.',
      duration: '2–3 месяца',
      investment: 'от 1 500 до 5 000 €'
    },
    {
      title: 'Пакет 6: Полноценная экспортная кампания',
      description: 'Все услуги «под ключ»: от стратегии и анализа до запуска рекламы, PR, контента и видеопродакшна.',
      duration: '6–12 месяцев',
      investment: 'от 8 000 до 15 000 €/мес'
    }
  ];

  const workflow = [
    {
      title: 'Бриф и уточнение данных (до старта)',
      items: [
        'Сбор недостающей информации по нише, продукту и целям клиента',
        'Детализация ТЗ'
      ],
      duration: '1 рабочий день'
    },
    {
      title: 'Подготовка бюджета',
      items: [
        'Формирование финального предложения: объем, сроки, стоимость',
        'Согласование и подписание'
      ],
      duration: 'от 1-3 рабочих дней'
    },
    {
      title: 'Оказание услуги',
      items: [
        'Сбор и анализ данных',
        'Оказание услуг',
        'Финализация и презентация результата клиенту'
      ],
      duration: 'От 10 рабочих дней'
    }
  ];

  const exportToPDF = async () => {
    setIsExporting(true);
    try {
      const slides = document.querySelectorAll('.slide');
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });

      for (let i = 0; i < slides.length; i++) {
        const slide = slides[i] as HTMLElement;
        const canvas = await html2canvas(slide, {
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: '#FAF8F5'
        });

        const imgData = canvas.toDataURL('image/png');
        const imgWidth = 297;
        const imgHeight = 210;

        if (i > 0) pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      }

      pdf.save('Centre-Digital-Media.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsExporting(false);
    }
  };

  const exportToPPTX = async () => {
    setIsExporting(true);
    try {
      const pptx = new pptxgen();
      pptx.layout = 'LAYOUT_16x9';
      pptx.author = 'Centre digital & media';
      pptx.company = 'Centre digital & media';
      pptx.subject = 'Agency Presentation';
      pptx.title = 'Centre digital & media - PR Partner';

      const colorBurgundy = '6B2C2C';
      const colorGreen = '2F5745';
      const colorBlack = '1A1A1A';
      const colorCream = 'FAF8F5';

      // Slide 1: Hero
      const slide1 = pptx.addSlide();
      slide1.background = { color: colorBlack };
      slide1.addText('Ваш надежный PR-партнер\nдля выхода в Россию', {
        x: 1, y: 2.5, w: 8, h: 2,
        fontSize: 48, bold: true, color: 'FFFFFF',
        fontFace: 'Arial', align: 'center', valign: 'middle'
      });

      // Slide 2: Market
      const slide2 = pptx.addSlide();
      slide2.background = { color: colorCream };
      slide2.addText('Российский рынок сегодня', {
        x: 0.5, y: 0.5, w: 9, h: 0.8,
        fontSize: 36, bold: true, color: colorBlack,
        fontFace: 'Arial'
      });
      marketPoints.forEach((point, i) => {
        slide2.addText('•', {
          x: 0.5, y: 1.6 + i * 0.7, w: 0.3, h: 0.4,
          fontSize: 14, color: colorBurgundy
        });
        slide2.addText(point, {
          x: 0.9, y: 1.6 + i * 0.7, w: 8.6, h: 0.6,
          fontSize: 14, color: '333333',
          fontFace: 'Arial', valign: 'top'
        });
      });

      // Slide 3: Cities
      const slide3 = pptx.addSlide();
      slide3.background = { color: colorGreen };
      slide3.addText('85% ваших будущих клиентов живут и принимают решения\nза пределами Москвы', {
        x: 0.5, y: 0.4, w: 9, h: 1,
        fontSize: 28, bold: true, color: 'FFFFFF',
        fontFace: 'Arial', align: 'center'
      });
      slide3.addText('У каждого города России – свой культурный код и свой покупатель!', {
        x: 0.5, y: 1.3, w: 9, h: 0.5,
        fontSize: 16, color: 'EEEEEE',
        fontFace: 'Arial', align: 'center'
      });
      cities.forEach((city, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const xPos = 0.5 + col * 3.2;
        const yPos = 2.0 + row * 0.9;
        slide3.addText(city.name, {
          x: xPos, y: yPos, w: 3.0, h: 0.3,
          fontSize: 14, bold: true, color: 'FFFFFF',
          fontFace: 'Arial'
        });
        slide3.addText(city.description, {
          x: xPos, y: yPos + 0.35, w: 3.0, h: 0.4,
          fontSize: 10, color: 'DDDDDD',
          fontFace: 'Arial'
        });
      });
      slide3.addText('Мы знаем эти города и их жителей, потому что работаем среди них\nи для них – более 19 лет!', {
        x: 0.5, y: 4.8, w: 9, h: 0.6,
        fontSize: 14, bold: true, color: 'FFFFFF',
        fontFace: 'Arial', align: 'center'
      });

      // Slide 4: Services
      const slide4 = pptx.addSlide();
      slide4.background = { color: colorCream };
      slide4.addText('Centre digital & media – ваш PR-мост в Россию', {
        x: 0.5, y: 0.5, w: 9, h: 0.6,
        fontSize: 32, bold: true, color: colorBlack,
        fontFace: 'Arial', align: 'center'
      });
      slide4.addText('Мы оказываем полный цикл услуг для продвижения бренда в регионах', {
        x: 0.5, y: 1.1, w: 9, h: 0.4,
        fontSize: 14, color: '666666',
        fontFace: 'Arial', align: 'center'
      });
      services.forEach((service, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const xPos = 0.5 + col * 5.0;
        const yPos = 1.8 + row * 1.1;
        const bgColor = i % 2 === 0 ? colorBurgundy : colorGreen;
        slide4.addShape(pptx.ShapeType.rect, {
          x: xPos, y: yPos, w: 4.8, h: 0.9,
          fill: { color: bgColor }
        });
        slide4.addText(service.title, {
          x: xPos + 0.2, y: yPos + 0.1, w: 4.4, h: 0.3,
          fontSize: 12, bold: true, color: 'FFFFFF',
          fontFace: 'Arial'
        });
        slide4.addText(service.description, {
          x: xPos + 0.2, y: yPos + 0.45, w: 4.4, h: 0.4,
          fontSize: 9, color: 'FFFFFF',
          fontFace: 'Arial'
        });
      });

      // Slide 5: Advantages
      const slide5 = pptx.addSlide();
      slide5.background = { color: colorBlack };
      slide5.addText('Почему мы?', {
        x: 0.5, y: 0.5, w: 9, h: 0.7,
        fontSize: 42, bold: true, color: 'FFFFFF',
        fontFace: 'Arial', align: 'center'
      });
      advantages.forEach((adv, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const xPos = 0.5 + col * 3.2;
        const yPos = 1.5 + row * 1.3;
        slide5.addShape(pptx.ShapeType.rect, {
          x: xPos, y: yPos, w: 3.0, h: 1.1,
          fill: { color: colorBurgundy, transparency: 70 }
        });
        slide5.addText(adv.title, {
          x: xPos + 0.15, y: yPos + 0.15, w: 2.7, h: 0.35,
          fontSize: 14, bold: true, color: 'FFFFFF',
          fontFace: 'Arial'
        });
        slide5.addText(adv.text, {
          x: xPos + 0.15, y: yPos + 0.55, w: 2.7, h: 0.45,
          fontSize: 10, color: 'EEEEEE',
          fontFace: 'Arial'
        });
      });
      slide5.addText('Наша команда – более 100 специалистов из Ижевска, Москвы и Санкт-Петербурга!', {
        x: 1, y: 4.5, w: 8, h: 0.6,
        fontSize: 16, bold: true, color: 'FFFFFF',
        fontFace: 'Arial', align: 'center'
      });

      // Slides 6-12: Cases
      cases.forEach((caseItem, index) => {
        const slideCase = pptx.addSlide();
        const isEven = index % 2 === 0;
        slideCase.background = { color: isEven ? colorCream : colorGreen };
        const textColor = isEven ? colorBlack : 'FFFFFF';
        const accentColor = isEven ? colorBurgundy : 'FFFFFF';

        slideCase.addText(`Кейс ${index + 1}`, {
          x: 0.5, y: 0.4, w: 9, h: 0.3,
          fontSize: 12, bold: true, color: accentColor,
          fontFace: 'Arial'
        });
        slideCase.addText(caseItem.title, {
          x: 0.5, y: 0.8, w: 9, h: 0.8,
          fontSize: 24, bold: true, color: textColor,
          fontFace: 'Arial'
        });
        slideCase.addText('Задача:', {
          x: 0.5, y: 1.9, w: 9, h: 0.3,
          fontSize: 14, bold: true, color: accentColor,
          fontFace: 'Arial'
        });
        slideCase.addText(caseItem.task, {
          x: 0.5, y: 2.2, w: 9, h: 0.6,
          fontSize: 11, color: textColor,
          fontFace: 'Arial'
        });
        slideCase.addText('Решение:', {
          x: 0.5, y: 3.0, w: 9, h: 0.3,
          fontSize: 14, bold: true, color: accentColor,
          fontFace: 'Arial'
        });
        slideCase.addText(caseItem.solution, {
          x: 0.5, y: 3.3, w: 9, h: 0.9,
          fontSize: 11, color: textColor,
          fontFace: 'Arial'
        });
        slideCase.addText('Результат:', {
          x: 0.5, y: 4.4, w: 9, h: 0.3,
          fontSize: 14, bold: true, color: 'FFFFFF',
          fontFace: 'Arial'
        });
        slideCase.addShape(pptx.ShapeType.rect, {
          x: 0.5, y: 4.7, w: 9, h: 0.6,
          fill: { color: isEven ? colorBurgundy : colorBlack }
        });
        slideCase.addText(caseItem.result, {
          x: 0.7, y: 4.8, w: 8.6, h: 0.4,
          fontSize: 11, color: 'FFFFFF',
          fontFace: 'Arial', valign: 'middle'
        });
      });

      // Slide 13: Problems & Solutions
      const slide13 = pptx.addSlide();
      slide13.background = { color: colorCream };
      slide13.addText('Основные проблемы при выходе на рынок России', {
        x: 0.5, y: 0.4, w: 9, h: 0.6,
        fontSize: 28, bold: true, color: colorBlack,
        fontFace: 'Arial', align: 'center'
      });
      slide13.addText('90% иностранных компаний сталкиваются с:', {
        x: 0.5, y: 1.0, w: 9, h: 0.4,
        fontSize: 14, color: '666666',
        fontFace: 'Arial', align: 'center'
      });
      
      slide13.addShape(pptx.ShapeType.rect, {
        x: 0.5, y: 1.6, w: 4.5, h: 0.5,
        fill: { color: colorBurgundy }
      });
      slide13.addText('Проблемы:', {
        x: 0.5, y: 1.6, w: 4.5, h: 0.5,
        fontSize: 16, bold: true, color: 'FFFFFF',
        fontFace: 'Arial', align: 'center', valign: 'middle'
      });
      problems.forEach((problem, i) => {
        slide13.addText('❌ ' + problem, {
          x: 0.7, y: 2.2 + i * 0.45, w: 4.1, h: 0.4,
          fontSize: 9, color: '333333',
          fontFace: 'Arial'
        });
      });

      slide13.addShape(pptx.ShapeType.rect, {
        x: 5.0, y: 1.6, w: 4.5, h: 0.5,
        fill: { color: colorGreen }
      });
      slide13.addText('Наши решения:', {
        x: 5.0, y: 1.6, w: 4.5, h: 0.5,
        fontSize: 16, bold: true, color: 'FFFFFF',
        fontFace: 'Arial', align: 'center', valign: 'middle'
      });
      solutions.forEach((solution, i) => {
        slide13.addText('✅ ' + solution, {
          x: 5.2, y: 2.2 + i * 0.45, w: 4.1, h: 0.4,
          fontSize: 9, color: '333333',
          fontFace: 'Arial'
        });
      });

      // Slide 14: Detailed Services
      const slide14 = pptx.addSlide();
      slide14.background = { color: colorBlack };
      slide14.addText('Наши услуги', {
        x: 0.5, y: 0.4, w: 9, h: 0.6,
        fontSize: 36, bold: true, color: 'FFFFFF',
        fontFace: 'Arial', align: 'center'
      });
      detailedServices.forEach((service, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const xPos = 0.5 + col * 5.0;
        const yPos = 1.2 + row * 1.3;
        slide14.addText(service.title, {
          x: xPos, y: yPos, w: 4.5, h: 0.3,
          fontSize: 12, bold: true, color: colorBurgundy === '6B2C2C' ? 'D9A5A5' : 'A5D9C5',
          fontFace: 'Arial'
        });
        service.items.forEach((item, j) => {
          slide14.addText('— ' + item, {
            x: xPos, y: yPos + 0.35 + j * 0.25, w: 4.5, h: 0.2,
            fontSize: 9, color: 'EEEEEE',
            fontFace: 'Arial'
          });
        });
      });

      // Slide 15: Packages
      const slide15 = pptx.addSlide();
      slide15.background = { color: colorCream };
      slide15.addText('Пакеты услуг', {
        x: 0.5, y: 0.4, w: 9, h: 0.6,
        fontSize: 36, bold: true, color: colorBlack,
        fontFace: 'Arial', align: 'center'
      });
      packages.forEach((pkg, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const xPos = 0.5 + col * 5.0;
        const yPos = 1.2 + row * 1.3;
        const bgColor = i % 2 === 0 ? colorBurgundy : colorGreen;
        slide15.addShape(pptx.ShapeType.rect, {
          x: xPos, y: yPos, w: 4.5, h: 1.1,
          fill: { color: bgColor }
        });
        slide15.addText(pkg.title, {
          x: xPos + 0.15, y: yPos + 0.1, w: 4.2, h: 0.3,
          fontSize: 11, bold: true, color: 'FFFFFF',
          fontFace: 'Arial'
        });
        slide15.addText(pkg.description, {
          x: xPos + 0.15, y: yPos + 0.43, w: 4.2, h: 0.45,
          fontSize: 8, color: 'FFFFFF',
          fontFace: 'Arial'
        });
        slide15.addText(`Срок: ${pkg.duration} | ${pkg.investment}`, {
          x: xPos + 0.15, y: yPos + 0.88, w: 4.2, h: 0.15,
          fontSize: 8, bold: true, color: 'FFFFFF',
          fontFace: 'Arial'
        });
      });

      // Slide 16: Workflow
      const slide16 = pptx.addSlide();
      slide16.background = { color: colorGreen };
      slide16.addText('Этапы работы', {
        x: 0.5, y: 0.5, w: 9, h: 0.7,
        fontSize: 36, bold: true, color: 'FFFFFF',
        fontFace: 'Arial', align: 'center'
      });
      workflow.forEach((stage, i) => {
        const yPos = 1.5 + i * 1.3;
        slide16.addShape(pptx.ShapeType.rect, {
          x: 1.5, y: yPos, w: 0.6, h: 0.6,
          fill: { color: colorBurgundy }
        });
        slide16.addText(`${i + 1}`, {
          x: 1.5, y: yPos, w: 0.6, h: 0.6,
          fontSize: 28, bold: true, color: 'FFFFFF',
          fontFace: 'Arial', align: 'center', valign: 'middle'
        });
        slide16.addText(stage.title, {
          x: 2.3, y: yPos, w: 6, h: 0.35,
          fontSize: 16, bold: true, color: 'FFFFFF',
          fontFace: 'Arial'
        });
        stage.items.forEach((item, j) => {
          slide16.addText('— ' + item, {
            x: 2.3, y: yPos + 0.4 + j * 0.25, w: 6, h: 0.2,
            fontSize: 10, color: 'EEEEEE',
            fontFace: 'Arial'
          });
        });
        slide16.addText(`Срок: ${stage.duration}`, {
          x: 2.3, y: yPos + 0.9, w: 6, h: 0.2,
          fontSize: 10, bold: true, color: 'FFFFFF',
          fontFace: 'Arial'
        });
      });

      // Slide 17: Contact
      const slide17 = pptx.addSlide();
      slide17.background = { color: colorBlack };
      slide17.addText('Давайте обсудим ваши задачи!', {
        x: 1, y: 1.5, w: 8, h: 0.8,
        fontSize: 40, bold: true, color: 'FFFFFF',
        fontFace: 'Arial', align: 'center'
      });
      slide17.addText('Софья Самойлова', {
        x: 2, y: 2.7, w: 6, h: 0.5,
        fontSize: 28, bold: true, color: 'FFFFFF',
        fontFace: 'Arial', align: 'center'
      });
      slide17.addText('Директор по экспорту', {
        x: 2, y: 3.2, w: 6, h: 0.3,
        fontSize: 16, color: 'CCCCCC',
        fontFace: 'Arial', align: 'center'
      });
      slide17.addText('s.samoylova@cdm.team', {
        x: 2, y: 3.8, w: 6, h: 0.3,
        fontSize: 14, color: 'FFFFFF',
        fontFace: 'Arial', align: 'center'
      });
      slide17.addText('Тел.: +7 922 525 65 75', {
        x: 2, y: 4.1, w: 6, h: 0.3,
        fontSize: 14, color: 'FFFFFF',
        fontFace: 'Arial', align: 'center'
      });
      slide17.addText('https://centredigital.ru', {
        x: 2, y: 4.4, w: 6, h: 0.3,
        fontSize: 14, color: 'FFFFFF',
        fontFace: 'Arial', align: 'center'
      });

      await pptx.writeFile({ fileName: 'Centre-Digital-Media.pptx' });
    } catch (error) {
      console.error('Error generating PPTX:', error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg shadow-lg z-50 border-b border-gray-200">
        <div className="container mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#6B2C2C] to-[#541F1F] rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">C</span>
              </div>
              <div>
                <span className="font-bold text-xl text-[#1A1A1A] block">Centre digital & media</span>
                <span className="text-xs text-gray-500">Ваш PR-партнер в России</span>
              </div>
            </div>
            <div className="flex gap-3">
              <Button onClick={exportToPDF} disabled={isExporting} className="gap-2 bg-[#6B2C2C] hover:bg-[#541F1F] shadow-lg hover:shadow-xl transition-all">
                <Icon name="FileText" size={18} />
                {isExporting ? 'Экспорт...' : 'Скачать PDF'}
              </Button>
              <Button onClick={exportToPPTX} disabled={isExporting} className="gap-2 bg-[#2F5745] hover:bg-[#1F3A2E] shadow-lg hover:shadow-xl transition-all">
                <Icon name="Presentation" size={18} />
                {isExporting ? 'Экспорт...' : 'Скачать PPTX'}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
        {/* Slide 1: Hero */}
        <div className="slide h-screen flex items-center justify-center bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-[#6B2C2C] rounded-full blur-[120px] opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-[600px] h-[600px] bg-[#2F5745] rounded-full blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          <div className="relative z-10 text-center px-16 max-w-6xl">
            <div className="mb-6 inline-block">
              <span className="px-6 py-2 bg-[#6B2C2C]/30 border border-[#6B2C2C] rounded-full text-sm font-semibold tracking-wider uppercase">PR & Marketing Agency</span>
            </div>
            <h1 className="text-8xl font-black mb-6 leading-[1.1] bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">Ваш надежный<br />PR-партнер</h1>
            <p className="text-5xl mb-14 text-gray-300 font-light tracking-tight">для выхода в Россию</p>
          </div>
        </div>

        {/* Slide 2: Market */}
        <div className="slide h-screen flex items-center bg-[#FAF8F5] p-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#6B2C2C] rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-7xl mx-auto w-full relative z-10">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-[#6B2C2C]/10 text-[#6B2C2C] rounded-lg text-sm font-bold uppercase tracking-wider">Возможности рынка</span>
            </div>
            <h2 className="text-7xl font-black text-[#1A1A1A] mb-12 leading-tight">Российский<br />рынок сегодня</h2>
            <div className="space-y-5">
              {marketPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-4 group hover:translate-x-2 transition-transform">
                  <div className="w-2.5 h-2.5 bg-[#6B2C2C] rounded-full mt-2.5 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                  <p className="text-lg text-gray-700 leading-relaxed font-medium">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide 3: Cities */}
        <div className="slide h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#2F5745] to-[#1F3A2E] text-white p-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-7xl w-full relative z-10">
            <div className="text-center mb-14">
              <h2 className="text-7xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">85% ваших будущих клиентов<br />живут за пределами Москвы</h2>
              <p className="text-2xl text-gray-200 font-light">У каждого города России – свой культурный код и свой покупатель!</p>
            </div>
            <div className="grid grid-cols-3 gap-5 mb-10">
              {cities.slice(0, 6).map((city, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md p-7 rounded-2xl border border-white/20 hover:bg-white/15 hover:scale-105 transition-all duration-300 hover:shadow-2xl group">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#6B2C2C] transition-colors">{city.name}</h3>
                  <p className="text-gray-200 text-sm leading-relaxed">{city.description}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-5 max-w-2xl mx-auto mb-10">
              {cities.slice(6).map((city, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md p-7 rounded-2xl border border-white/20 hover:bg-white/15 hover:scale-105 transition-all duration-300 hover:shadow-2xl group">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#6B2C2C] transition-colors">{city.name}</h3>
                  <p className="text-gray-200 text-sm leading-relaxed">{city.description}</p>
                </div>
              ))}
            </div>
            <div className="bg-[#1A1A1A]/40 backdrop-blur-md px-10 py-6 rounded-2xl text-center border border-white/10">
              <p className="text-xl text-white font-semibold">Мы знаем эти города и их жителей, потому что работаем среди них и для них – более 19 лет!</p>
            </div>
          </div>
        </div>

        {/* Slide 4: Services */}
        <div className="slide h-screen flex flex-col items-center justify-center bg-[#FAF8F5] p-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2F5745] rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10 max-w-6xl">
            <div className="text-center mb-14">
              <h2 className="text-6xl font-black text-[#1A1A1A] mb-3">Centre digital & media</h2>
              <p className="text-3xl text-gray-600 font-light">Ваш PR-мост в Россию</p>
              <p className="text-xl text-gray-500 mt-2">Мы оказываем полный цикл услуг для продвижения бренда в регионах</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {services.map((service, index) => {
                const bgColor = index % 2 === 0 ? 'from-[#6B2C2C] to-[#541F1F]' : 'from-[#2F5745] to-[#1F3A2E]';
                return (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${bgColor} p-8 rounded-2xl text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-white/20`}
                  >
                    <h3 className="text-xl font-bold mb-4 tracking-wide">{service.title}</h3>
                    <p className="text-sm opacity-95 leading-relaxed">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Slide 5: Advantages */}
        <div className="slide h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] text-white p-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-20 w-80 h-80 bg-[#6B2C2C] rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#2F5745] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          </div>
          <div className="relative z-10 max-w-7xl">
            <h2 className="text-7xl font-black mb-20 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Почему мы?</h2>
            <div className="grid grid-cols-3 gap-7">
              {advantages.map((adv, index) => (
                <div key={index} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md p-9 rounded-2xl text-center border border-white/20 hover:border-[#6B2C2C] hover:scale-105 transition-all duration-300 group hover:shadow-2xl">
                  <h3 className="text-2xl font-bold mb-5 group-hover:text-[#6B2C2C] transition-colors">{adv.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{adv.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-16 text-center">
              <div className="inline-block bg-gradient-to-r from-[#6B2C2C] to-[#541F1F] px-12 py-5 rounded-2xl shadow-2xl border border-white/20">
                <p className="text-2xl font-bold">Наша команда – более 100 специалистов из Ижевска, Москвы и Санкт-Петербурга!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Slides 6-12: Cases */}
        {cases.map((caseItem, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className={`slide h-screen flex flex-col justify-center p-16 ${
                isEven ? 'bg-[#FAF8F5]' : 'bg-gradient-to-br from-[#2F5745] to-[#1F3A2E] text-white'
              }`}
            >
              <div className="max-w-5xl mx-auto w-full">
                <div className={`text-sm font-bold mb-4 ${isEven ? 'text-[#6B2C2C]' : 'text-white'}`}>
                  Кейс {index + 1}
                </div>
                <h2 className={`text-5xl font-bold mb-12 ${isEven ? 'text-[#1A1A1A]' : 'text-white'}`}>
                  {caseItem.title}
                </h2>
                
                <div className={`p-6 rounded-lg mb-6 ${isEven ? 'bg-[#6B2C2C]/10' : 'bg-[#1A1A1A]/30'}`}>
                  <h3 className={`text-xl font-bold mb-3 ${isEven ? 'text-[#6B2C2C]' : 'text-white'}`}>
                    Задача:
                  </h3>
                  <p className={`text-lg ${isEven ? 'text-gray-700' : 'text-gray-200'}`}>
                    {caseItem.task}
                  </p>
                </div>

                <div className={`p-6 rounded-lg mb-6 ${isEven ? 'bg-[#6B2C2C]/10' : 'bg-[#1A1A1A]/30'}`}>
                  <h3 className={`text-xl font-bold mb-3 ${isEven ? 'text-[#6B2C2C]' : 'text-white'}`}>
                    Решение:
                  </h3>
                  <p className={`text-lg ${isEven ? 'text-gray-700' : 'text-gray-200'}`}>
                    {caseItem.solution}
                  </p>
                </div>

                <div className={`p-6 rounded-lg ${isEven ? 'bg-[#6B2C2C]' : 'bg-[#1A1A1A]'} text-white`}>
                  <h3 className="text-xl font-bold mb-3">Результат:</h3>
                  <p className="text-lg">{caseItem.result}</p>
                </div>
              </div>
            </div>
          );
        })}

        {/* Slide 13: Problems & Solutions */}
        <div className="slide h-screen flex flex-col items-center justify-center bg-[#FAF8F5] p-16">
          <h2 className="text-5xl font-bold text-[#1A1A1A] mb-4 text-center">Основные проблемы при выходе на рынок России</h2>
          <p className="text-xl text-gray-600 mb-12 text-center">90% иностранных компаний сталкиваются с:</p>
          <div className="grid grid-cols-2 gap-12 max-w-6xl w-full">
            <div>
              <div className="bg-[#6B2C2C] text-white p-4 rounded-t-lg mb-6">
                <h3 className="text-2xl font-bold text-center">Проблемы</h3>
              </div>
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="text-[#6B2C2C] text-xl flex-shrink-0">❌</div>
                    <p className="text-lg text-gray-700">{problem}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-[#2F5745] text-white p-4 rounded-t-lg mb-6">
                <h3 className="text-2xl font-bold text-center">Наши решения</h3>
              </div>
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="text-[#2F5745] text-xl flex-shrink-0">✅</div>
                    <p className="text-lg text-gray-700">{solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Slide 14: Detailed Services */}
        <div className="slide h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] text-white p-16">
          <h2 className="text-6xl font-black mb-16 text-center">Наши услуги</h2>
          <div className="grid grid-cols-2 gap-8 max-w-6xl">
            {detailedServices.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                <h3 className="text-2xl font-bold mb-5 text-[#6B2C2C]">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="text-gray-300 flex items-start gap-2">
                      <span className="text-[#2F5745] flex-shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Slide 15: Packages */}
        <div className="slide h-screen flex flex-col items-center justify-center bg-[#FAF8F5] p-16">
          <h2 className="text-6xl font-black text-[#1A1A1A] mb-16 text-center">Пакеты услуг</h2>
          <div className="grid grid-cols-2 gap-6 max-w-6xl">
            {packages.map((pkg, index) => {
              const bgColor = index % 2 === 0 ? 'from-[#6B2C2C] to-[#541F1F]' : 'from-[#2F5745] to-[#1F3A2E]';
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${bgColor} p-8 rounded-2xl text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300`}
                >
                  <h3 className="text-xl font-bold mb-4">{pkg.title}</h3>
                  <p className="text-sm mb-4 opacity-95">{pkg.description}</p>
                  <div className="border-t border-white/20 pt-4 mt-4">
                    <p className="text-sm font-bold">Срок: {pkg.duration}</p>
                    <p className="text-sm font-bold">Инвестиции: {pkg.investment}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Slide 16: Workflow */}
        <div className="slide h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#2F5745] to-[#1F3A2E] text-white p-16">
          <h2 className="text-6xl font-black mb-16 text-center">Этапы работы</h2>
          <div className="max-w-4xl w-full space-y-8">
            {workflow.map((stage, index) => (
              <div key={index} className="flex gap-6 items-start bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20">
                <div className="w-16 h-16 bg-[#6B2C2C] rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl font-bold">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">{stage.title}</h3>
                  <ul className="space-y-2 mb-4">
                    {stage.items.map((item, i) => (
                      <li key={i} className="text-gray-200 flex items-start gap-2">
                        <span className="text-[#6B2C2C]">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm font-bold text-[#6B2C2C]">Срок: {stage.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide 17: Contact */}
        <div className="slide h-screen flex items-center justify-center bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-20 w-64 h-64 bg-[#6B2C2C] rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#2F5745] rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10 text-center">
            <h2 className="text-6xl font-bold mb-8">Давайте обсудим ваши задачи!</h2>
            <div className="bg-gradient-to-r from-[#6B2C2C] to-[#541F1F] px-12 py-8 rounded-2xl inline-block mb-8 shadow-2xl">
              <p className="text-4xl font-bold mb-2">Софья Самойлова</p>
              <p className="text-xl text-gray-200">Директор по экспорту</p>
            </div>
            <div className="space-y-2 text-xl">
              <p>s.samoylova@cdm.team</p>
              <p>Тел.: +7 922 525 65 75</p>
              <p>https://centredigital.ru</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
