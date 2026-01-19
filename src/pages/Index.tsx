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
      slide1.addText('Полный цикл услуг для продвижения бренда в регионах', {
        x: 2, y: 4.5, w: 6, h: 0.7,
        fontSize: 16, color: 'FFFFFF',
        fontFace: 'Arial', align: 'center', valign: 'middle'
      });

      // Slide 2: Market
      const slide2 = pptx.addSlide();
      slide2.background = { color: colorCream };
      slide2.addText('Российский рынок сегодня', {
        x: 0.5, y: 0.6, w: 5, h: 0.8,
        fontSize: 36, bold: true, color: colorBlack,
        fontFace: 'Arial'
      });
      
      marketPoints.forEach((text, i) => {
        slide2.addText('●', {
          x: 0.5, y: 1.7 + i * 0.7, w: 0.2, h: 0.3,
          fontSize: 14, color: colorBurgundy
        });
        slide2.addText(text, {
          x: 0.8, y: 1.7 + i * 0.7, w: 8.2, h: 0.6,
          fontSize: 14, color: '333333',
          fontFace: 'Arial', valign: 'top'
        });
      });

      slide2.addShape(pptx.ShapeType.rect, {
        x: 6, y: 4.2, w: 3.5, h: 1.2,
        fill: { color: colorBurgundy }
      });
      slide2.addText('80+ млн', {
        x: 6, y: 4.3, w: 3.5, h: 0.6,
        fontSize: 42, bold: true, color: 'FFFFFF',
        fontFace: 'Arial', align: 'center', valign: 'middle'
      });
      slide2.addText('активных потребителей', {
        x: 6, y: 4.9, w: 3.5, h: 0.4,
        fontSize: 16, color: 'FFFFFF',
        fontFace: 'Arial', align: 'center', valign: 'middle'
      });

      // Slide 3: Regions
      const slide3 = pptx.addSlide();
      slide3.background = { color: colorGreen };
      slide3.addText('Главный актив – регионы!', {
        x: 0.5, y: 0.5, w: 9, h: 0.8,
        fontSize: 42, bold: true, color: 'FFFFFF',
        fontFace: 'Arial', align: 'center'
      });

      cities.forEach((city, i) => {
        const col = i % 4;
        const row = Math.floor(i / 4);
        const xPos = 0.4 + col * 2.4;
        const yPos = 1.6 + row * 1.4;
        
        slide3.addShape(pptx.ShapeType.rect, {
          x: xPos, y: yPos, w: 2.2, h: 1.1,
          fill: { color: colorBlack, transparency: 30 }
        });
        slide3.addText(city.name, {
          x: xPos, y: yPos + 0.15, w: 2.2, h: 0.4,
          fontSize: 18, bold: true, color: 'FFFFFF',
          fontFace: 'Arial', align: 'center'
        });
        slide3.addText(city.description, {
          x: xPos + 0.1, y: yPos + 0.55, w: 2.0, h: 0.45,
          fontSize: 10, color: 'DDDDDD',
          fontFace: 'Arial', align: 'center'
        });
      });

      slide3.addText('У каждого города России – свой культурный код и свой покупатель!', {
        x: 0.5, y: 4.5, w: 9, h: 0.4,
        fontSize: 18, bold: true, color: 'FFFFFF',
        fontFace: 'Arial', align: 'center'
      });

      slide3.addText('Мы знаем эти города и их жителей, потому что работаем среди них и для них – более 19 лет!', {
        x: 0.5, y: 5.0, w: 9, h: 0.4,
        fontSize: 16, color: 'DDDDDD',
        fontFace: 'Arial', align: 'center'
      });

      // Slide 4: Services
      const slide4 = pptx.addSlide();
      slide4.background = { color: colorCream };
      slide4.addText('Centre digital & media', {
        x: 1, y: 0.5, w: 8, h: 0.6,
        fontSize: 36, bold: true, color: colorBlack,
        fontFace: 'Arial', align: 'center'
      });
      slide4.addText('Ваш PR-мост в Россию', {
        x: 1, y: 1.1, w: 8, h: 0.4,
        fontSize: 18, color: '666666',
        fontFace: 'Arial', align: 'center'
      });

      services.forEach((service, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const xPos = 0.5 + col * 4.8;
        const yPos = 2.0 + row * 1.3;
        
        slide4.addShape(pptx.ShapeType.rect, {
          x: xPos, y: yPos, w: 4.3, h: 1.1,
          fill: { color: i % 2 === 0 ? colorBurgundy : colorGreen }
        });
        slide4.addText(service.title, {
          x: xPos + 0.2, y: yPos + 0.15, w: 3.9, h: 0.4,
          fontSize: 16, bold: true, color: 'FFFFFF',
          fontFace: 'Arial'
        });
        slide4.addText(service.description, {
          x: xPos + 0.2, y: yPos + 0.6, w: 3.9, h: 0.4,
          fontSize: 12, color: 'EEEEEE',
          fontFace: 'Arial'
        });
      });

      // Slide 5: Advantages
      const slide5 = pptx.addSlide();
      slide5.background = { color: colorBlack };
      slide5.addText('Почему мы?', {
        x: 1, y: 0.5, w: 8, h: 0.7,
        fontSize: 42, bold: true, color: 'FFFFFF',
        fontFace: 'Arial', align: 'center'
      });

      advantages.forEach((adv, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const xPos = 0.5 + col * 3.2;
        const yPos = 1.7 + row * 1.6;
        
        slide5.addShape(pptx.ShapeType.rect, {
          x: xPos, y: yPos, w: 3.0, h: 1.3,
          fill: { color: colorBurgundy, transparency: 20 }
        });
        slide5.addText(adv.title, {
          x: xPos + 0.15, y: yPos + 0.2, w: 2.7, h: 0.5,
          fontSize: 18, bold: true, color: 'FFFFFF',
          fontFace: 'Arial', align: 'center'
        });
        slide5.addText(adv.text, {
          x: xPos + 0.15, y: yPos + 0.75, w: 2.7, h: 0.4,
          fontSize: 13, color: 'DDDDDD',
          fontFace: 'Arial', align: 'center'
        });
      });

      // Slides 6-15: Cases (10 cases)
      cases.forEach((caseItem, index) => {
        const slideCase = pptx.addSlide();
        slideCase.background = { color: index % 2 === 0 ? colorCream : colorGreen };
        const textColor = index % 2 === 0 ? colorBlack : 'FFFFFF';
        const accentColor = index % 2 === 0 ? colorBurgundy : colorBlack;
        
        slideCase.addText(`Кейс ${index + 1}`, {
          x: 0.5, y: 0.4, w: 2, h: 0.4,
          fontSize: 16, bold: true, color: accentColor,
          fontFace: 'Arial'
        });
        
        slideCase.addText(caseItem.title, {
          x: 0.5, y: 0.9, w: 9, h: 0.8,
          fontSize: 32, bold: true, color: textColor,
          fontFace: 'Arial'
        });

        slideCase.addShape(pptx.ShapeType.rect, {
          x: 0.5, y: 2.0, w: 9, h: 1.2,
          fill: { color: accentColor, transparency: 10 }
        });
        slideCase.addText('Задача:', {
          x: 0.7, y: 2.1, w: 8.6, h: 0.3,
          fontSize: 14, bold: true, color: accentColor,
          fontFace: 'Arial'
        });
        slideCase.addText(caseItem.task, {
          x: 0.7, y: 2.45, w: 8.6, h: 0.6,
          fontSize: 13, color: textColor,
          fontFace: 'Arial'
        });

        if (caseItem.solution) {
          slideCase.addShape(pptx.ShapeType.rect, {
            x: 0.5, y: 3.4, w: 9, h: 1.2,
            fill: { color: accentColor, transparency: 10 }
          });
          slideCase.addText('Решение:', {
            x: 0.7, y: 3.5, w: 8.6, h: 0.3,
            fontSize: 14, bold: true, color: accentColor,
            fontFace: 'Arial'
          });
          slideCase.addText(caseItem.solution, {
            x: 0.7, y: 3.85, w: 8.6, h: 0.6,
            fontSize: 13, color: textColor,
            fontFace: 'Arial'
          });
        }

        slideCase.addShape(pptx.ShapeType.rect, {
          x: 0.5, y: 4.8, w: 9, h: 0.8,
          fill: { color: accentColor }
        });
        slideCase.addText('Результат:', {
          x: 0.7, y: 4.9, w: 8.6, h: 0.3,
          fontSize: 14, bold: true, color: 'FFFFFF',
          fontFace: 'Arial'
        });
        slideCase.addText(caseItem.result, {
          x: 0.7, y: 5.2, w: 8.6, h: 0.4,
          fontSize: 13, color: 'FFFFFF',
          fontFace: 'Arial'
        });
      });

      // Slide 16: Problems & Solutions
      const slide16 = pptx.addSlide();
      slide16.background = { color: colorCream };
      slide16.addText('Проблемы и решения', {
        x: 0.5, y: 0.4, w: 9, h: 0.7,
        fontSize: 36, bold: true, color: colorBlack,
        fontFace: 'Arial', align: 'center'
      });

      slide16.addShape(pptx.ShapeType.rect, {
        x: 0.5, y: 1.3, w: 4.3, h: 0.5,
        fill: { color: colorBurgundy }
      });
      slide16.addText('Проблемы входа на рынок:', {
        x: 0.5, y: 1.3, w: 4.3, h: 0.5,
        fontSize: 16, bold: true, color: 'FFFFFF',
        fontFace: 'Arial', align: 'center', valign: 'middle'
      });

      problems.forEach((problem, i) => {
        slide16.addText('●', {
          x: 0.6, y: 2.0 + i * 0.45, w: 0.2, h: 0.3,
          fontSize: 12, color: colorBurgundy
        });
        slide16.addText(problem, {
          x: 0.9, y: 2.0 + i * 0.45, w: 3.7, h: 0.4,
          fontSize: 11, color: '333333',
          fontFace: 'Arial'
        });
      });

      slide16.addShape(pptx.ShapeType.rect, {
        x: 5.2, y: 1.3, w: 4.3, h: 0.5,
        fill: { color: colorGreen }
      });
      slide16.addText('Наши решения:', {
        x: 5.2, y: 1.3, w: 4.3, h: 0.5,
        fontSize: 16, bold: true, color: 'FFFFFF',
        fontFace: 'Arial', align: 'center', valign: 'middle'
      });

      solutions.forEach((solution, i) => {
        slide16.addText('●', {
          x: 5.3, y: 2.0 + i * 0.45, w: 0.2, h: 0.3,
          fontSize: 12, color: colorGreen
        });
        slide16.addText(solution, {
          x: 5.6, y: 2.0 + i * 0.45, w: 3.7, h: 0.4,
          fontSize: 11, color: '333333',
          fontFace: 'Arial'
        });
      });

      slide16.addShape(pptx.ShapeType.rect, {
        x: 1.5, y: 5.0, w: 7, h: 0.6,
        fill: { color: colorBurgundy, transparency: 20 }
      });
      slide16.addText('Мы превращаем барьеры в возможности!', {
        x: 1.5, y: 5.0, w: 7, h: 0.6,
        fontSize: 18, bold: true, color: colorBlack,
        fontFace: 'Arial', align: 'center', valign: 'middle'
      });

      // Slide 17: Contact
      const slide17 = pptx.addSlide();
      slide17.background = { color: colorBlack };
      slide17.addText('Готовы начать?', {
        x: 1, y: 1.5, w: 8, h: 1,
        fontSize: 48, bold: true, color: 'FFFFFF',
        fontFace: 'Arial', align: 'center'
      });
      slide17.addText('Свяжитесь с нами для консультации', {
        x: 1, y: 2.8, w: 8, h: 0.6,
        fontSize: 22, color: 'CCCCCC',
        fontFace: 'Arial', align: 'center'
      });
      slide17.addShape(pptx.ShapeType.rect, {
        x: 2.5, y: 3.8, w: 5, h: 0.8,
        fill: { color: colorBurgundy }
      });
      slide17.addText('Centre digital & media', {
        x: 2.5, y: 3.8, w: 5, h: 0.8,
        fontSize: 24, bold: true, color: 'FFFFFF',
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
    <div className="min-h-screen bg-cream">
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <Button
          onClick={exportToPDF}
          disabled={isExporting}
          variant="outline"
          className="bg-white shadow-lg hover:bg-gray-50"
        >
          <Icon name="Download" className="mr-2 h-4 w-4" />
          {isExporting ? 'Экспорт...' : 'PDF'}
        </Button>
        <Button
          onClick={exportToPPTX}
          disabled={isExporting}
          className="bg-burgundy text-white shadow-lg hover:bg-burgundy/90"
        >
          <Icon name="Download" className="mr-2 h-4 w-4" />
          {isExporting ? 'Экспорт...' : 'PPTX'}
        </Button>
      </div>

      {/* Slide 1: Title */}
      <div className="slide h-screen flex items-center justify-center bg-dark-gray text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-burgundy rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-forest-green rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 text-center px-8 max-w-4xl">
          <h1 className="text-7xl font-bold mb-6 leading-tight">
            Ваш надежный<br />PR-партнер
          </h1>
          <p className="text-3xl text-gray-300 mb-12">для выхода в Россию</p>
          <div className="bg-burgundy/20 backdrop-blur-sm px-8 py-4 rounded-lg inline-block">
            <p className="text-xl">Полный цикл услуг для продвижения бренда в регионах</p>
          </div>
        </div>
      </div>

      {/* Slide 2: Market */}
      <div className="slide h-screen flex items-center justify-center bg-cream p-16">
        <div className="max-w-7xl w-full grid grid-cols-2 gap-12">
          <div>
            <h2 className="text-5xl font-bold text-dark-gray mb-8">Российский рынок сегодня</h2>
            <div className="space-y-4">
              {marketPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-burgundy rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-burgundy text-white p-12 rounded-2xl text-center shadow-2xl">
              <div className="text-7xl font-bold mb-4">80+ млн</div>
              <p className="text-2xl">активных потребителей</p>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 3: Regions */}
      <div className="slide h-screen flex flex-col items-center justify-center bg-forest-green text-white p-16">
        <h2 className="text-6xl font-bold mb-12 text-center">Главный актив – регионы!</h2>
        <div className="grid grid-cols-4 gap-6 max-w-6xl mb-8">
          {cities.map((city, index) => (
            <div key={index} className="bg-dark-gray/30 backdrop-blur-sm p-6 rounded-lg text-center hover:bg-dark-gray/50 transition-all">
              <h3 className="text-xl font-bold mb-2">{city.name}</h3>
              <p className="text-sm text-gray-200">{city.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8 space-y-3">
          <p className="text-2xl font-bold">У каждого города России – свой культурный код и свой покупатель!</p>
          <p className="text-xl text-gray-200">Мы знаем эти города и их жителей, потому что работаем среди них и для них – более 19 лет!</p>
        </div>
      </div>

      {/* Slide 4: Services */}
      <div className="slide h-screen flex flex-col items-center justify-center bg-cream p-16">
        <h2 className="text-5xl font-bold text-dark-gray mb-3 text-center">Centre digital & media</h2>
        <p className="text-2xl text-gray-600 mb-12 text-center">Ваш PR-мост в Россию</p>
        <div className="grid grid-cols-2 gap-6 max-w-5xl">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg text-white ${
                index % 2 === 0 ? 'bg-burgundy' : 'bg-forest-green'
              }`}
            >
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-sm opacity-90">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Slide 5: Advantages */}
      <div className="slide h-screen flex flex-col items-center justify-center bg-dark-gray text-white p-16">
        <h2 className="text-6xl font-bold mb-16 text-center">Почему мы?</h2>
        <div className="grid grid-cols-3 gap-8 max-w-6xl">
          {advantages.map((adv, index) => (
            <div key={index} className="bg-burgundy/20 backdrop-blur-sm p-8 rounded-lg text-center hover:bg-burgundy/30 transition-all">
              <h3 className="text-2xl font-bold mb-4">{adv.title}</h3>
              <p className="text-gray-200">{adv.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Slides 6-15: Cases */}
      {cases.map((caseItem, index) => (
        <div
          key={index}
          className={`slide h-screen flex flex-col justify-center p-16 ${
            index % 2 === 0 ? 'bg-cream' : 'bg-forest-green text-white'
          }`}
        >
          <div className="max-w-5xl mx-auto w-full">
            <div className={`text-sm font-bold mb-4 ${index % 2 === 0 ? 'text-burgundy' : 'text-white'}`}>
              Кейс {index + 1}
            </div>
            <h2 className={`text-5xl font-bold mb-12 ${index % 2 === 0 ? 'text-dark-gray' : 'text-white'}`}>
              {caseItem.title}
            </h2>
            
            <div className={`p-6 rounded-lg mb-6 ${index % 2 === 0 ? 'bg-burgundy/10' : 'bg-dark-gray/30'}`}>
              <h3 className={`text-xl font-bold mb-3 ${index % 2 === 0 ? 'text-burgundy' : 'text-white'}`}>
                Задача:
              </h3>
              <p className={`text-lg ${index % 2 === 0 ? 'text-gray-700' : 'text-gray-200'}`}>
                {caseItem.task}
              </p>
            </div>

            {caseItem.solution && (
              <div className={`p-6 rounded-lg mb-6 ${index % 2 === 0 ? 'bg-burgundy/10' : 'bg-dark-gray/30'}`}>
                <h3 className={`text-xl font-bold mb-3 ${index % 2 === 0 ? 'text-burgundy' : 'text-white'}`}>
                  Решение:
                </h3>
                <p className={`text-lg ${index % 2 === 0 ? 'text-gray-700' : 'text-gray-200'}`}>
                  {caseItem.solution}
                </p>
              </div>
            )}

            <div className={`p-6 rounded-lg ${index % 2 === 0 ? 'bg-burgundy' : 'bg-dark-gray'} text-white`}>
              <h3 className="text-xl font-bold mb-3">Результат:</h3>
              <p className="text-lg">{caseItem.result}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Slide 16: Problems & Solutions */}
      <div className="slide h-screen flex flex-col items-center justify-center bg-cream p-16">
        <h2 className="text-5xl font-bold text-dark-gray mb-12 text-center">Проблемы и решения</h2>
        <div className="grid grid-cols-2 gap-12 max-w-6xl w-full">
          <div>
            <div className="bg-burgundy text-white p-4 rounded-t-lg mb-6">
              <h3 className="text-2xl font-bold text-center">Проблемы входа на рынок:</h3>
            </div>
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-burgundy rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">{problem}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="bg-forest-green text-white p-4 rounded-t-lg mb-6">
              <h3 className="text-2xl font-bold text-center">Наши решения:</h3>
            </div>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-forest-green rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">{solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 bg-burgundy/20 px-8 py-4 rounded-lg">
          <p className="text-2xl font-bold text-dark-gray text-center">
            Мы превращаем барьеры в возможности!
          </p>
        </div>
      </div>

      {/* Slide 17: Contact */}
      <div className="slide h-screen flex items-center justify-center bg-dark-gray text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 bg-burgundy rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-forest-green rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 text-center">
          <h2 className="text-6xl font-bold mb-8">Готовы начать?</h2>
          <p className="text-3xl text-gray-300 mb-12">Свяжитесь с нами для консультации</p>
          <div className="bg-burgundy px-12 py-6 rounded-lg inline-block">
            <p className="text-3xl font-bold">Centre digital & media</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
