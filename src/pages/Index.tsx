import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import pptxgen from 'pptxgenjs';

const Index = () => {
  const [isExporting, setIsExporting] = useState(false);

  const services = [
    {
      title: 'СТРАТЕГИЯ И ВЫХОД НА РЫНОК',
      description: 'Анализ ЦА, позиционирование, рекламные кампании'
    },
    {
      title: 'КОНТЕНТ И КОММУНИКАЦИИ',
      description: 'Подготовка текстов, фото, видео и SMM под российскую аудиторию'
    },
    {
      title: 'PR и GR',
      description: 'Публикации в СМИ, работа с экспертами и блогерами'
    },
    {
      title: 'ПРОДАКШН',
      description: 'Видео и аудио: от Reels до имиджевых фильмов. Собственная студия и команда профессионалов'
    },
    {
      title: 'МЕДИАЗАКУПКИ',
      description: 'ТВ, радио, digital, наружка. Единое окно и полный контроль'
    },
    {
      title: 'АНАЛИТИКА',
      description: 'Прозрачная отчётность по охватам, лидам и продажам'
    }
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

  const advantages = [
    { title: '19-летний опыт', text: 'Знаем, как продвигаться в субъектах РФ' },
    { title: 'Собственная команда', text: 'Копирайтеры, дизайнеры, операторы, SMM, продюсеры' },
    { title: 'Есть свои медиа', text: 'Радиостанции, онлайн-СМИ, федеральные СМИ' },
    { title: '"Единое окно"', text: 'Ведем клиентов комплексно' },
    { title: 'Прозрачность и контроль', text: 'Четкие KPI и отчётность' },
    { title: 'Гибкие форматы', text: 'Мобильнее федеральных агентств' }
  ];

  const cases = [
    {
      title: 'Организация федерального блог-тура',
      task: 'Сформировать образ республики для туристов из других регионов',
      solution: 'Организовали масштабный блог-тур с участием популярных блогеров и инфлюенсеров',
      result: '70 публикаций, 400K+ просмотров, превышение KPI в 3.5 раза'
    },
    {
      title: 'Разработка бренд-платформы и дизайна упаковки для пельменей',
      task: 'Создать бренд для выхода производителя в федеральные сети',
      solution: 'Разработали полную бренд-платформу, название, логотип и дизайн упаковки с учетом требований ритейла',
      result: 'Продукт успешно вошел в федеральные сети, полный брендбук и дизайн упаковки'
    },
    {
      title: 'Продвижение региона на ВДНХ',
      task: 'Презентация Удмуртской Республики на главной выставке страны',
      solution: 'Создали имиджевый видеоролик, подчеркивающий промышленный и культурный потенциал региона',
      result: '55 000 просмотров за первый день, более 100 000 просмотров всего. Активное использование на выставках'
    },
    {
      title: 'PR-кампания Всероссийского хоккейного марафона',
      task: 'Освещение крупного спортивного события федерального масштаба',
      solution: 'Комплексная PR-кампания с привлечением региональных и федеральных СМИ, работа с блогерами',
      result: 'Широкий охват аудитории, публикации в ключевых спортивных изданиях, рост узнаваемости события'
    },
    {
      title: 'Создание имиджевого видеоролика для региона',
      task: 'Показать туристический и инвестиционный потенциал региона',
      solution: 'Полный цикл видеопродакшна: сценарий, съемка, монтаж, звуковое оформление',
      result: 'Ролик используется на федеральных площадках, выставках и в цифровых каналах'
    },
    {
      title: 'Организация инфлюенс-кампании для завода',
      task: 'Повысить узнаваемость лакокрасочного бренда среди B2C и B2B аудитории',
      solution: 'Запустили кампанию с участием строительных блогеров и экспертов по ремонту',
      result: 'Рост поисковых запросов до 200%, увеличение брендовых запросов на 22%'
    },
    {
      title: 'Видеоролики для привлечения экспортеров',
      task: 'Показать востребованность региональной продукции за рубежом',
      solution: 'Серия видеороликов о успешных экспортных кейсах местных предприятий',
      result: 'Материалы активно используются на международных выставках и в digital-продвижении'
    },
    {
      title: 'Комплексная digital-кампания для производителя',
      task: 'Увеличить продажи продукции в регионах РФ',
      solution: 'Запуск таргетированной рекламы, работа с контентом, SMM-продвижение',
      result: 'Рост конверсии на 45%, увеличение продаж в целевых регионах'
    },
    {
      title: 'GR-кампания для промышленного предприятия',
      task: 'Выстроить коммуникацию с региональными властями',
      solution: 'Организация встреч, подготовка материалов, медиасопровождение',
      result: 'Успешное взаимодействие с администрацией, получение поддержки проекта'
    },
    {
      title: 'Запуск продукта на региональном рынке',
      task: 'Вывести новый бренд напитков в 5 городах России',
      solution: 'Полный цикл: стратегия, креатив, медиазакупки, мониторинг',
      result: 'Узнаваемость бренда 67% в целевой группе за 3 месяца'
    }
  ];

  const marketPoints = [
    'Российский рынок сегодня – это более 80 миллионов активных потребителей',
    'После 2022 года на российском рынке освободились ниши – реальные возможности для новых производителей',
    'Жители России готовы пробовать товары и услуги из дружественных стран – если они понятны и вызывают доверие',
    'Продукция из СНГ, Азии и Ближнего Востока воспринимается как "свое, родное"'
  ];

  const problems = [
    'Культурные барьеры и ошибки в коммуникации',
    'Непонимание локальных медиаканалов',
    'Неэффективное расходование 30–50% бюджета',
    'Потеря времени, лидов и доверия',
    'Отсутствие прозрачности в медиазакупках',
    'Сложность выбора надёжного партнёра'
  ];

  const solutions = [
    'Глубокая локализация под менталитет в 80+ городах',
    '19 лет опыта',
    'Полный цикл «под ключ»',
    'Регулярная отчётность',
    'Прямые контакты со СМИ',
    'Прозрачный медиаплан с KPI'
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

      // Slide 1: Title
      const slide1 = pptx.addSlide();
      slide1.background = { color: colorBlack };
      slide1.addText('Ваш надежный\nPR-партнер', {
        x: 1.5, y: 1.8, w: 7, h: 1.8,
        fontSize: 54, bold: true, color: 'FFFFFF',
        fontFace: 'Arial', align: 'center', valign: 'middle'
      });
      slide1.addText('для выхода в Россию', {
        x: 1.5, y: 3.6, w: 7, h: 0.6,
        fontSize: 28, color: 'CCCCCC',
        fontFace: 'Arial', align: 'center', valign: 'middle'
      });
      slide1.addShape(pptx.ShapeType.rect, {
        x: 2, y: 4.5, w: 6, h: 0.7,
        fill: { color: colorBurgundy, transparency: 20 }
      });
      slide1.addText('85% клиентов превышают KPI благодаря глубокой локализации', {
        x: 2, y: 4.5, w: 6, h: 0.7,
        fontSize: 16, color: 'FFFFFF',
        fontFace: 'Arial', align: 'center', valign: 'middle'
      });

      // Slide 2: Services
      const slide2 = pptx.addSlide();
      slide2.background = { color: colorCream };
      slide2.addText('УСЛУГИ', {
        x: 0.5, y: 0.5, w: 9, h: 0.6,
        fontSize: 36, bold: true, color: colorBlack,
        fontFace: 'Arial'
      });
      services.forEach((service, idx) => {
        const row = Math.floor(idx / 2);
        const col = idx % 2;
        const xPos = 0.5 + col * 4.75;
        const yPos = 1.5 + row * 1.5;
        slide2.addShape(pptx.ShapeType.rect, {
          x: xPos, y: yPos, w: 4.5, h: 1.3,
          fill: { color: colorBurgundy, transparency: 10 }
        });
        slide2.addText(service.title, {
          x: xPos + 0.2, y: yPos + 0.15, w: 4.1, h: 0.5,
          fontSize: 14, bold: true, color: colorBlack,
          fontFace: 'Arial'
        });
        slide2.addText(service.description, {
          x: xPos + 0.2, y: yPos + 0.7, w: 4.1, h: 0.5,
          fontSize: 11, color: '333333',
          fontFace: 'Arial'
        });
      });

      // Slide 3: Cities
      const slide3 = pptx.addSlide();
      slide3.background = { color: colorBlack };
      slide3.addText('МЫ ЗНАЕМ 80+ ГОРОДОВ РОССИИ', {
        x: 0.5, y: 0.5, w: 9, h: 0.6,
        fontSize: 36, bold: true, color: 'FFFFFF',
        fontFace: 'Arial'
      });
      cities.forEach((city, idx) => {
        const row = Math.floor(idx / 2);
        const col = idx % 2;
        const xPos = 0.5 + col * 4.75;
        const yPos = 1.5 + row * 1.3;
        slide3.addShape(pptx.ShapeType.rect, {
          x: xPos, y: yPos, w: 4.5, h: 1.1,
          fill: { color: colorGreen, transparency: 20 }
        });
        slide3.addText(city.name, {
          x: xPos + 0.2, y: yPos + 0.15, w: 4.1, h: 0.4,
          fontSize: 16, bold: true, color: 'FFFFFF',
          fontFace: 'Arial'
        });
        slide3.addText(city.description, {
          x: xPos + 0.2, y: yPos + 0.6, w: 4.1, h: 0.4,
          fontSize: 11, color: 'CCCCCC',
          fontFace: 'Arial'
        });
      });

      // Slide 4: Advantages
      const slide4 = pptx.addSlide();
      slide4.background = { color: colorCream };
      slide4.addText('НАШИ ПРЕИМУЩЕСТВА', {
        x: 0.5, y: 0.5, w: 9, h: 0.6,
        fontSize: 36, bold: true, color: colorBlack,
        fontFace: 'Arial'
      });
      advantages.forEach((adv, idx) => {
        const row = Math.floor(idx / 2);
        const col = idx % 2;
        const xPos = 0.5 + col * 4.75;
        const yPos = 1.5 + row * 1.5;
        slide4.addShape(pptx.ShapeType.rect, {
          x: xPos, y: yPos, w: 4.5, h: 1.3,
          fill: { color: colorGreen, transparency: 10 }
        });
        slide4.addText(adv.title, {
          x: xPos + 0.2, y: yPos + 0.2, w: 4.1, h: 0.5,
          fontSize: 16, bold: true, color: colorBlack,
          fontFace: 'Arial'
        });
        slide4.addText(adv.text, {
          x: xPos + 0.2, y: yPos + 0.75, w: 4.1, h: 0.4,
          fontSize: 12, color: '333333',
          fontFace: 'Arial'
        });
      });

      // Slides 5-14: Cases (10 slides)
      cases.forEach((caseItem, idx) => {
        const slide = pptx.addSlide();
        slide.background = { color: idx % 2 === 0 ? colorBlack : colorCream };
        const textColor = idx % 2 === 0 ? 'FFFFFF' : colorBlack;
        const accentColor = idx % 2 === 0 ? colorBurgundy : colorGreen;

        slide.addText(`КЕЙС ${idx + 1}`, {
          x: 0.5, y: 0.5, w: 9, h: 0.5,
          fontSize: 20, bold: true, color: accentColor,
          fontFace: 'Arial'
        });
        slide.addText(caseItem.title, {
          x: 0.5, y: 1.2, w: 9, h: 0.8,
          fontSize: 28, bold: true, color: textColor,
          fontFace: 'Arial'
        });
        slide.addText('ЗАДАЧА', {
          x: 0.5, y: 2.3, w: 9, h: 0.3,
          fontSize: 14, bold: true, color: accentColor,
          fontFace: 'Arial'
        });
        slide.addText(caseItem.task, {
          x: 0.5, y: 2.7, w: 9, h: 0.6,
          fontSize: 13, color: textColor,
          fontFace: 'Arial'
        });
        slide.addText('РЕШЕНИЕ', {
          x: 0.5, y: 3.5, w: 9, h: 0.3,
          fontSize: 14, bold: true, color: accentColor,
          fontFace: 'Arial'
        });
        slide.addText(caseItem.solution, {
          x: 0.5, y: 3.9, w: 9, h: 0.7,
          fontSize: 13, color: textColor,
          fontFace: 'Arial'
        });
        slide.addText('РЕЗУЛЬТАТ', {
          x: 0.5, y: 4.8, w: 9, h: 0.3,
          fontSize: 14, bold: true, color: accentColor,
          fontFace: 'Arial'
        });
        slide.addText(caseItem.result, {
          x: 0.5, y: 5.2, w: 9, h: 0.7,
          fontSize: 13, color: textColor,
          fontFace: 'Arial'
        });
      });

      // Slide 15: Market Opportunity
      const slide15 = pptx.addSlide();
      slide15.background = { color: colorBlack };
      slide15.addText('ПОЧЕМУ РОССИЯ – ЭТО ВОЗМОЖНОСТЬ', {
        x: 0.5, y: 0.5, w: 9, h: 0.6,
        fontSize: 32, bold: true, color: 'FFFFFF',
        fontFace: 'Arial'
      });
      marketPoints.forEach((point, idx) => {
        slide15.addText(`${idx + 1}`, {
          x: 0.7, y: 1.7 + idx * 1, w: 0.5, h: 0.5,
          fontSize: 24, bold: true, color: colorBurgundy,
          fontFace: 'Arial', align: 'center', valign: 'middle'
        });
        slide15.addText(point, {
          x: 1.5, y: 1.7 + idx * 1, w: 7.5, h: 0.8,
          fontSize: 14, color: 'FFFFFF',
          fontFace: 'Arial', valign: 'middle'
        });
      });

      // Slide 16: Problems vs Solutions
      const slide16 = pptx.addSlide();
      slide16.background = { color: colorCream };
      slide16.addText('ПРОБЛЕМЫ И РЕШЕНИЯ', {
        x: 0.5, y: 0.5, w: 9, h: 0.6,
        fontSize: 32, bold: true, color: colorBlack,
        fontFace: 'Arial'
      });
      slide16.addText('БЕЗ НАС', {
        x: 0.5, y: 1.3, w: 4.5, h: 0.4,
        fontSize: 18, bold: true, color: colorBurgundy,
        fontFace: 'Arial'
      });
      slide16.addText('С НАМИ', {
        x: 5.3, y: 1.3, w: 4.5, h: 0.4,
        fontSize: 18, bold: true, color: colorGreen,
        fontFace: 'Arial'
      });
      problems.forEach((problem, idx) => {
        slide16.addText(`${idx + 1}. ${problem}`, {
          x: 0.5, y: 1.9 + idx * 0.65, w: 4.3, h: 0.6,
          fontSize: 11, color: '333333',
          fontFace: 'Arial'
        });
      });
      solutions.forEach((solution, idx) => {
        slide16.addText(`${idx + 1}. ${solution}`, {
          x: 5.3, y: 1.9 + idx * 0.65, w: 4.3, h: 0.6,
          fontSize: 11, color: '333333',
          fontFace: 'Arial'
        });
      });

      // Slide 17: Final CTA
      const slide17 = pptx.addSlide();
      slide17.background = { color: colorBlack };
      slide17.addText('ДАВАЙТЕ ВМЕСТЕ', {
        x: 1, y: 2, w: 8, h: 0.8,
        fontSize: 48, bold: true, color: 'FFFFFF',
        fontFace: 'Arial', align: 'center', valign: 'middle'
      });
      slide17.addText('ВЫВЕДЕМ ВАШ БРЕНД НА РОССИЙСКИЙ РЫНОК', {
        x: 1, y: 2.8, w: 8, h: 0.6,
        fontSize: 24, color: 'CCCCCC',
        fontFace: 'Arial', align: 'center', valign: 'middle'
      });
      slide17.addShape(pptx.ShapeType.rect, {
        x: 2.5, y: 4, w: 5, h: 0.8,
        fill: { color: colorBurgundy }
      });
      slide17.addText('Свяжитесь с нами', {
        x: 2.5, y: 4, w: 5, h: 0.8,
        fontSize: 20, bold: true, color: 'FFFFFF',
        fontFace: 'Arial', align: 'center', valign: 'middle'
      });
      slide17.addText('Centre digital & media', {
        x: 1, y: 5.2, w: 8, h: 0.5,
        fontSize: 18, color: 'CCCCCC',
        fontFace: 'Arial', align: 'center', valign: 'middle'
      });

      pptx.writeFile({ fileName: 'Centre-Digital-Media.pptx' });
    } catch (error) {
      console.error('Error generating PPTX:', error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FAF8F5] via-[#F5F3F0] to-[#FAF8F5] font-[system-ui,-apple-system,'Inter',sans-serif]">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#1A1A1A]/95 via-[#2A2A2A]/95 to-[#1A1A1A]/95 backdrop-blur-lg shadow-2xl border-b border-white/10">
        <div className="container mx-auto px-8 py-6 flex justify-between items-center">
          <div className="flex flex-col">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6B2C2C] to-[#541F1F] flex items-center justify-center shadow-lg">
                <span className="text-2xl font-black text-white">C</span>
              </div>
              <div>
                <h1 className="text-2xl font-black bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent tracking-tight">
                  Centre digital & media
                </h1>
                <p className="text-sm font-light text-gray-400 tracking-wide">Ваш PR-партнер в России</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <Button
              onClick={exportToPDF}
              disabled={isExporting}
              className="px-8 py-6 text-base font-bold bg-gradient-to-r from-[#6B2C2C] to-[#541F1F] hover:from-[#7B3C3C] hover:to-[#642F2F] text-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 disabled:opacity-50"
            >
              <Icon name="download" className="w-5 h-5 mr-3" />
              Скачать PDF
            </Button>
            <Button
              onClick={exportToPPTX}
              disabled={isExporting}
              className="px-8 py-6 text-base font-bold bg-gradient-to-r from-[#2F5745] to-[#1F3A2E] hover:from-[#3F6755] hover:to-[#2F4A3E] text-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 disabled:opacity-50"
            >
              <Icon name="presentation" className="w-5 h-5 mr-3" />
              Скачать PPTX
            </Button>
          </div>
        </div>
      </nav>

      {/* Slides Container */}
      <div className="pt-32 pb-20 space-y-8">
        {/* Slide 1: Hero */}
        <div className="slide min-h-[600px] mx-auto max-w-7xl relative overflow-hidden rounded-[2rem] shadow-2xl bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A]">
          {/* Animated Background Orbs */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#6B2C2C] rounded-full blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '0s' }}></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#2F5745] rounded-full blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          <div className="relative z-10 flex flex-col items-center justify-center min-h-[600px] px-16 py-20">
            <div className="inline-block px-8 py-3 mb-8 bg-gradient-to-r from-[#6B2C2C]/30 to-[#2F5745]/30 backdrop-blur-md rounded-full border border-white/20">
              <span className="text-base font-light text-white/90 tracking-widest uppercase">Профессиональное агентство</span>
            </div>
            
            <h1 className="text-8xl font-black text-center mb-8 leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Ваш надежный
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#6B2C2C] via-[#8B4C4C] to-[#6B2C2C] bg-clip-text text-transparent">
                PR-партнер
              </span>
            </h1>
            
            <p className="text-3xl font-light text-gray-300 text-center mb-16 tracking-wide">
              для выхода в Россию
            </p>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#6B2C2C] to-[#541F1F] rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-all duration-300"></div>
              <div className="relative bg-gradient-to-r from-[#6B2C2C] via-[#7B3C3C] to-[#541F1F] backdrop-blur-md rounded-2xl px-16 py-10 border border-white/20 shadow-2xl">
                <div className="text-7xl font-black text-white mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                  85%
                </div>
                <div className="w-24 h-1 bg-gradient-to-r from-white/50 to-transparent mx-auto mb-4"></div>
                <p className="text-xl font-light text-white/90 text-center leading-relaxed">
                  клиентов превышают KPI благодаря<br />глубокой локализации
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2: Services */}
        <div className="slide min-h-[600px] mx-auto max-w-7xl relative overflow-hidden rounded-[2rem] shadow-2xl bg-gradient-to-br from-[#FAF8F5] via-[#F5F3F0] to-[#FAF8F5]">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#6B2C2C] rounded-full blur-[120px] opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          <div className="relative z-10 px-16 py-16">
            <div className="mb-16">
              <div className="inline-block px-6 py-2 mb-6 bg-gradient-to-r from-[#6B2C2C]/20 to-[#6B2C2C]/10 rounded-full">
                <span className="text-sm font-bold text-[#6B2C2C] tracking-wider uppercase">Что мы предлагаем</span>
              </div>
              <h2 className="text-6xl font-black bg-gradient-to-r from-[#1A1A1A] to-[#4A4A4A] bg-clip-text text-transparent tracking-tight">
                УСЛУГИ
              </h2>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`group p-10 rounded-2xl border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 backdrop-blur-sm ${
                    index % 2 === 0
                      ? 'bg-gradient-to-br from-[#6B2C2C]/15 via-[#6B2C2C]/10 to-transparent'
                      : 'bg-gradient-to-br from-[#2F5745]/15 via-[#2F5745]/10 to-transparent'
                  }`}
                >
                  <h3 className={`text-xl font-black mb-4 tracking-tight leading-tight ${
                    index % 2 === 0 ? 'text-[#6B2C2C]' : 'text-[#2F5745]'
                  }`}>
                    {service.title}
                  </h3>
                  <p className="text-base font-light text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide 3: Cities */}
        <div className="slide min-h-[600px] mx-auto max-w-7xl relative overflow-hidden rounded-[2rem] shadow-2xl bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A]">
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2F5745] rounded-full blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          
          <div className="relative z-10 px-16 py-16">
            <div className="mb-16">
              <div className="inline-block px-6 py-2 mb-6 bg-gradient-to-r from-[#2F5745]/30 to-[#2F5745]/20 rounded-full border border-white/10">
                <span className="text-sm font-bold text-[#2F5745] tracking-wider uppercase">География работы</span>
              </div>
              <h2 className="text-6xl font-black text-white tracking-tight mb-4">
                МЫ ЗНАЕМ 80+ ГОРОДОВ РОССИИ
              </h2>
              <p className="text-xl font-light text-gray-400 tracking-wide">
                От промышленных центров до культурных столиц
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {cities.map((city, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl bg-gradient-to-br from-[#2F5745]/25 via-[#2F5745]/15 to-transparent backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <h3 className="text-2xl font-black text-white mb-3 group-hover:text-[#2F5745] transition-colors duration-300">
                    {city.name}
                  </h3>
                  <p className="text-base font-light text-gray-300 leading-relaxed">
                    {city.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide 4: Advantages */}
        <div className="slide min-h-[600px] mx-auto max-w-7xl relative overflow-hidden rounded-[2rem] shadow-2xl bg-gradient-to-br from-[#FAF8F5] via-[#F5F3F0] to-[#FAF8F5]">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#2F5745] rounded-full blur-[120px] opacity-10 animate-pulse"></div>
          
          <div className="relative z-10 px-16 py-16">
            <div className="mb-16">
              <div className="inline-block px-6 py-2 mb-6 bg-gradient-to-r from-[#2F5745]/20 to-[#2F5745]/10 rounded-full">
                <span className="text-sm font-bold text-[#2F5745] tracking-wider uppercase">Почему выбирают нас</span>
              </div>
              <h2 className="text-6xl font-black bg-gradient-to-r from-[#1A1A1A] to-[#4A4A4A] bg-clip-text text-transparent tracking-tight">
                НАШИ ПРЕИМУЩЕСТВА
              </h2>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="group p-10 rounded-2xl bg-gradient-to-br from-[#2F5745]/15 via-[#2F5745]/10 to-transparent backdrop-blur-sm border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <h3 className="text-2xl font-black text-[#2F5745] mb-4 tracking-tight">
                    {advantage.title}
                  </h3>
                  <p className="text-base font-light text-gray-700 leading-relaxed">
                    {advantage.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slides 5-14: Cases */}
        {cases.map((caseItem, index) => (
          <div
            key={index}
            className={`slide min-h-[600px] mx-auto max-w-7xl relative overflow-hidden rounded-[2rem] shadow-2xl ${
              index % 2 === 0
                ? 'bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A]'
                : 'bg-gradient-to-br from-[#FAF8F5] via-[#F5F3F0] to-[#FAF8F5]'
            }`}
          >
            <div className={`absolute ${index % 2 === 0 ? 'top-20 right-20' : 'bottom-20 left-20'} w-[500px] h-[500px] ${
              index % 2 === 0 ? 'bg-[#6B2C2C]' : 'bg-[#2F5745]'
            } rounded-full blur-[120px] opacity-${index % 2 === 0 ? '20' : '10'} animate-pulse`}></div>
            
            <div className="relative z-10 px-16 py-16">
              <div className={`inline-block px-6 py-2 mb-8 rounded-full ${
                index % 2 === 0
                  ? 'bg-gradient-to-r from-[#6B2C2C]/30 to-[#6B2C2C]/20 border border-white/10'
                  : 'bg-gradient-to-r from-[#2F5745]/20 to-[#2F5745]/10'
              }`}>
                <span className={`text-sm font-bold tracking-wider uppercase ${
                  index % 2 === 0 ? 'text-[#6B2C2C]' : 'text-[#2F5745]'
                }`}>
                  КЕЙС {index + 1}
                </span>
              </div>
              
              <h2 className={`text-5xl font-black mb-12 leading-tight tracking-tight ${
                index % 2 === 0 ? 'text-white' : 'bg-gradient-to-r from-[#1A1A1A] to-[#4A4A4A] bg-clip-text text-transparent'
              }`}>
                {caseItem.title}
              </h2>
              
              <div className="space-y-8">
                <div className={`p-8 rounded-2xl backdrop-blur-md ${
                  index % 2 === 0
                    ? 'bg-white/5 border border-white/10'
                    : 'bg-[#2F5745]/10 border border-[#2F5745]/20'
                }`}>
                  <h3 className={`text-xl font-black mb-4 tracking-wider uppercase ${
                    index % 2 === 0 ? 'text-[#6B2C2C]' : 'text-[#2F5745]'
                  }`}>
                    ЗАДАЧА
                  </h3>
                  <p className={`text-lg font-light leading-relaxed ${
                    index % 2 === 0 ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {caseItem.task}
                  </p>
                </div>
                
                <div className={`p-8 rounded-2xl backdrop-blur-md ${
                  index % 2 === 0
                    ? 'bg-white/5 border border-white/10'
                    : 'bg-[#2F5745]/10 border border-[#2F5745]/20'
                }`}>
                  <h3 className={`text-xl font-black mb-4 tracking-wider uppercase ${
                    index % 2 === 0 ? 'text-[#6B2C2C]' : 'text-[#2F5745]'
                  }`}>
                    РЕШЕНИЕ
                  </h3>
                  <p className={`text-lg font-light leading-relaxed ${
                    index % 2 === 0 ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {caseItem.solution}
                  </p>
                </div>
                
                <div className={`p-8 rounded-2xl backdrop-blur-md ${
                  index % 2 === 0
                    ? 'bg-gradient-to-br from-[#6B2C2C]/20 to-[#6B2C2C]/10 border border-[#6B2C2C]/30'
                    : 'bg-gradient-to-br from-[#2F5745]/20 to-[#2F5745]/10 border border-[#2F5745]/30'
                }`}>
                  <h3 className={`text-xl font-black mb-4 tracking-wider uppercase ${
                    index % 2 === 0 ? 'text-[#6B2C2C]' : 'text-[#2F5745]'
                  }`}>
                    РЕЗУЛЬТАТ
                  </h3>
                  <p className={`text-lg font-light leading-relaxed ${
                    index % 2 === 0 ? 'text-white' : 'text-gray-800'
                  }`}>
                    {caseItem.result}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slide 15: Market Opportunity */}
        <div className="slide min-h-[600px] mx-auto max-w-7xl relative overflow-hidden rounded-[2rem] shadow-2xl bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A]">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#6B2C2C] rounded-full blur-[120px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#2F5745] rounded-full blur-[120px] opacity-15 animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          <div className="relative z-10 px-16 py-16">
            <div className="mb-16">
              <div className="inline-block px-6 py-2 mb-6 bg-gradient-to-r from-[#6B2C2C]/30 to-[#2F5745]/30 rounded-full border border-white/10">
                <span className="text-sm font-bold text-white tracking-wider uppercase">Рыночные перспективы</span>
              </div>
              <h2 className="text-6xl font-black text-white tracking-tight leading-tight">
                ПОЧЕМУ РОССИЯ –<br />ЭТО ВОЗМОЖНОСТЬ
              </h2>
            </div>
            
            <div className="space-y-8">
              {marketPoints.map((point, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-8 p-8 rounded-2xl bg-gradient-to-r from-white/5 to-transparent backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-[1.02] shadow-xl"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6B2C2C] to-[#541F1F] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl font-black text-white">{index + 1}</span>
                  </div>
                  <p className="flex-1 text-xl font-light text-white leading-relaxed pt-3">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slide 16: Problems vs Solutions */}
        <div className="slide min-h-[600px] mx-auto max-w-7xl relative overflow-hidden rounded-[2rem] shadow-2xl bg-gradient-to-br from-[#FAF8F5] via-[#F5F3F0] to-[#FAF8F5]">
          <div className="absolute top-20 left-20 w-[400px] h-[400px] bg-[#6B2C2C] rounded-full blur-[120px] opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-[#2F5745] rounded-full blur-[120px] opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          <div className="relative z-10 px-16 py-16">
            <div className="mb-16">
              <div className="inline-block px-6 py-2 mb-6 bg-gradient-to-r from-[#6B2C2C]/20 via-[#2F5745]/20 to-[#6B2C2C]/20 rounded-full">
                <span className="text-sm font-bold bg-gradient-to-r from-[#6B2C2C] to-[#2F5745] bg-clip-text text-transparent tracking-wider uppercase">Сравнение</span>
              </div>
              <h2 className="text-6xl font-black bg-gradient-to-r from-[#1A1A1A] to-[#4A4A4A] bg-clip-text text-transparent tracking-tight">
                ПРОБЛЕМЫ И РЕШЕНИЯ
              </h2>
            </div>
            
            <div className="grid grid-cols-2 gap-12">
              <div>
                <div className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-[#6B2C2C]/20 to-[#6B2C2C]/10 border border-[#6B2C2C]/20">
                  <h3 className="text-3xl font-black text-[#6B2C2C] tracking-tight">БЕЗ НАС</h3>
                </div>
                <div className="space-y-4">
                  {problems.map((problem, index) => (
                    <div key={index} className="group p-6 rounded-xl bg-gradient-to-r from-[#6B2C2C]/10 to-transparent border border-[#6B2C2C]/20 hover:border-[#6B2C2C]/40 transition-all duration-300 hover:scale-[1.02] shadow-md">
                      <div className="flex items-start gap-4">
                        <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#6B2C2C]/20 flex items-center justify-center text-sm font-bold text-[#6B2C2C]">
                          {index + 1}
                        </span>
                        <p className="flex-1 text-base font-light text-gray-700 leading-relaxed pt-1">
                          {problem}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-[#2F5745]/20 to-[#2F5745]/10 border border-[#2F5745]/20">
                  <h3 className="text-3xl font-black text-[#2F5745] tracking-tight">С НАМИ</h3>
                </div>
                <div className="space-y-4">
                  {solutions.map((solution, index) => (
                    <div key={index} className="group p-6 rounded-xl bg-gradient-to-r from-[#2F5745]/10 to-transparent border border-[#2F5745]/20 hover:border-[#2F5745]/40 transition-all duration-300 hover:scale-[1.02] shadow-md">
                      <div className="flex items-start gap-4">
                        <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#2F5745]/20 flex items-center justify-center text-sm font-bold text-[#2F5745]">
                          {index + 1}
                        </span>
                        <p className="flex-1 text-base font-light text-gray-700 leading-relaxed pt-1">
                          {solution}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 17: Final CTA */}
        <div className="slide min-h-[600px] mx-auto max-w-7xl relative overflow-hidden rounded-[2rem] shadow-2xl bg-gradient-to-br from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#6B2C2C] via-[#2F5745] to-[#6B2C2C] rounded-full blur-[150px] opacity-20 animate-pulse"></div>
          
          <div className="relative z-10 flex flex-col items-center justify-center min-h-[600px] px-16 py-20 text-center">
            <div className="inline-block px-8 py-3 mb-12 bg-gradient-to-r from-[#6B2C2C]/30 via-[#2F5745]/30 to-[#6B2C2C]/30 backdrop-blur-md rounded-full border border-white/20">
              <span className="text-base font-light text-white/90 tracking-widest uppercase">Готовы начать?</span>
            </div>
            
            <h1 className="text-7xl font-black text-white mb-8 leading-tight tracking-tight">
              ДАВАЙТЕ ВМЕСТЕ
            </h1>
            
            <p className="text-3xl font-light bg-gradient-to-r from-gray-300 via-white to-gray-300 bg-clip-text text-transparent mb-16 leading-relaxed tracking-wide">
              ВЫВЕДЕМ ВАШ БРЕНД<br />НА РОССИЙСКИЙ РЫНОК
            </p>
            
            <div className="relative group mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-[#6B2C2C] via-[#8B4C4C] to-[#6B2C2C] rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-all duration-300"></div>
              <button className="relative px-16 py-8 bg-gradient-to-r from-[#6B2C2C] to-[#541F1F] rounded-2xl text-2xl font-black text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border border-white/20">
                Свяжитесь с нами
              </button>
            </div>
            
            <div className="space-y-3">
              <p className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Centre digital & media
              </p>
              <p className="text-lg font-light text-gray-400 tracking-wide">
                Ваш проводник на российском рынке
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
