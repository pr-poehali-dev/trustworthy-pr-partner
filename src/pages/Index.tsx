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
      title: 'Стратегия и выход на рынок',
      description: 'Анализ ЦА, позиционирование, рекламные кампании'
    },
    {
      title: 'Контент и коммуникации',
      description: 'Подготовка текстов, фото, видео и SMM под российскую аудиторию'
    },
    {
      title: 'PR и GR',
      description: 'Публикации в СМИ, работа с экспертами и блогерами'
    },
    {
      title: 'Продакшн',
      description: 'Видео и аудио: от Reels до имиджевых фильмов'
    },
    {
      title: 'Медиазакупки',
      description: 'ТВ, радио, digital, наружка'
    },
    {
      title: 'Аналитика',
      description: 'Прозрачная отчётность в реальном времени'
    }
  ];

  const cities = [
    { name: 'Ижевск', description: 'Промышленный кластер, оружейная столица' },
    { name: 'Казань', description: 'Перекресток культур и технологий' },
    { name: 'Екатеринбург', description: 'Деловая столица Урала' },
    { name: 'Новосибирск', description: 'Научный и логистический хаб Сибири' },
    { name: 'Краснодар', description: 'Аграрный и курортный центр Юга' },
    { name: 'Нижний Новгород', description: 'Индустриальный кластер Поволжья' },
    { name: 'Ростов-на-Дону', description: 'Ворота Кавказа и транспортный узел' }
  ];

  const advantages = [
    { title: '19 лет опыта', text: 'Маркетинг, контент, PR и GR в регионах РФ' },
    { title: 'Команда 100+', text: 'Копирайтеры, дизайнеры, SMM, продакшн' },
    { title: 'Свои медиа', text: 'Радио, онлайн-СМИ, миллионная аудитория' },
    { title: 'Единое окно', text: 'От стратегии до отчётности' },
    { title: 'Прозрачность', text: 'Регулярная отчётность по KPI' },
    { title: 'Гибкость', text: 'Быстрее федеральных агентств' }
  ];

  const cases = [
    {
      title: 'Федеральный блог-тур',
      task: 'Сформировать образ республики для туристов',
      result: '70 публикаций, 400K+ просмотров, KPI × 3.5'
    },
    {
      title: 'Бренд для пельменей',
      task: 'Выход в федеральные сети',
      result: 'Полный брендбук и дизайн упаковки'
    },
    {
      title: 'Ролик для региона',
      task: 'Презентация Удмуртии на ВДНХ',
      result: '55K за день, 100K+ всего'
    },
    {
      title: 'Инфлюенс для завода',
      task: 'Узнаваемость лакокрасочного бренда',
      result: 'Рост запросов до 200%, +22% по бренду'
    },
    {
      title: 'Видео для экспорта',
      task: 'Показать востребованность за рубежом',
      result: 'Используется на выставках и в digital'
    }
  ];

  const marketPoints = [
    '80+ млн активных потребителей',
    'Свободные ниши после 2022',
    'Интерес к дружественным странам',
    'СНГ и Азия воспринимаются как "свои"'
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

      // Слайд 1: Титульный
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

      // Слайд 2: Российский рынок
      const slide2 = pptx.addSlide();
      slide2.background = { color: colorCream };
      slide2.addText('Российский рынок сегодня', {
        x: 0.5, y: 0.6, w: 4.5, h: 0.8,
        fontSize: 36, bold: true, color: colorBlack,
        fontFace: 'Arial'
      });
      
      marketPoints.forEach((text, i) => {
        slide2.addText('●', {
          x: 0.5, y: 1.8 + i * 0.55, w: 0.2, h: 0.3,
          fontSize: 14, color: colorBurgundy
        });
        slide2.addText(text, {
          x: 0.8, y: 1.8 + i * 0.55, w: 4, h: 0.3,
          fontSize: 16, color: '333333',
          fontFace: 'Arial', valign: 'middle'
        });
      });

      slide2.addShape(pptx.ShapeType.rect, {
        x: 5.5, y: 1.5, w: 3.5, h: 2.8,
        fill: { color: colorBurgundy }
      });
      slide2.addText('85%', {
        x: 5.5, y: 1.8, w: 3.5, h: 1.2,
        fontSize: 72, bold: true, color: 'FFFFFF',
        fontFace: 'Arial', align: 'center', valign: 'middle'
      });
      slide2.addText('ваших клиентов живут\nза пределами Москвы', {
        x: 5.5, y: 3.1, w: 3.5, h: 0.9,
        fontSize: 18, color: 'FFFFFF',
        fontFace: 'Arial', align: 'center', valign: 'middle'
      });

      // Слайд 3: Регионы
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
        const yPos = 1.7 + row * 1.3;
        
        slide3.addShape(pptx.ShapeType.rect, {
          x: xPos, y: yPos, w: 2.2, h: 1.0,
          fill: { color: colorBlack, transparency: 30 }
        });
        slide3.addText(city.name, {
          x: xPos, y: yPos + 0.15, w: 2.2, h: 0.4,
          fontSize: 18, bold: true, color: 'FFFFFF',
          fontFace: 'Arial', align: 'center'
        });
        slide3.addText(city.description, {
          x: xPos + 0.1, y: yPos + 0.55, w: 2.0, h: 0.35,
          fontSize: 11, color: 'DDDDDD',
          fontFace: 'Arial', align: 'center'
        });
      });

      slide3.addText('19 лет работы в регионах России', {
        x: 1, y: 4.8, w: 8, h: 0.5,
        fontSize: 20, bold: true, color: 'FFFFFF',
        fontFace: 'Arial', align: 'center'
      });

      // Слайд 4: Услуги
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
        const col = i % 3;
        const row = Math.floor(i / 3);
        const xPos = 0.4 + col * 3.2;
        const yPos = 2.0 + row * 1.5;
        
        slide4.addShape(pptx.ShapeType.rect, {
          x: xPos, y: yPos, w: 3.0, h: 1.2,
          fill: { color: 'FFFFFF' },
          line: { color: 'DDDDDD', width: 1 }
        });
        slide4.addText(service.title, {
          x: xPos + 0.15, y: yPos + 0.15, w: 2.7, h: 0.4,
          fontSize: 15, bold: true, color: colorBlack,
          fontFace: 'Arial'
        });
        slide4.addText(service.description, {
          x: xPos + 0.15, y: yPos + 0.6, w: 2.7, h: 0.5,
          fontSize: 11, color: '555555',
          fontFace: 'Arial'
        });
      });

      // Слайд 5: Преимущества
      const slide5 = pptx.addSlide();
      slide5.background = { color: 'FFFFFF' };
      slide5.addText('Почему мы?', {
        x: 1, y: 0.5, w: 8, h: 0.7,
        fontSize: 38, bold: true, color: colorBlack,
        fontFace: 'Arial', align: 'center'
      });

      advantages.forEach((adv, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const xPos = 0.4 + col * 3.2;
        const yPos = 1.6 + row * 1.4;
        
        slide5.addShape(pptx.ShapeType.rect, {
          x: xPos, y: yPos, w: 3.0, h: 1.1,
          fill: { color: colorCream },
          line: { color: colorBurgundy, width: 3, dashType: 'solid' }
        });
        slide5.addText(adv.title, {
          x: xPos + 0.15, y: yPos + 0.15, w: 2.7, h: 0.4,
          fontSize: 18, bold: true, color: colorBlack,
          fontFace: 'Arial'
        });
        slide5.addText(adv.text, {
          x: xPos + 0.15, y: yPos + 0.6, w: 2.7, h: 0.4,
          fontSize: 12, color: '555555',
          fontFace: 'Arial'
        });
      });

      slide5.addShape(pptx.ShapeType.rect, {
        x: 2.5, y: 4.6, w: 5, h: 0.9,
        fill: { color: colorBurgundy }
      });
      slide5.addText('100+ специалистов', {
        x: 2.5, y: 4.65, w: 5, h: 0.4,
        fontSize: 24, bold: true, color: 'FFFFFF',
        fontFace: 'Arial', align: 'center'
      });
      slide5.addText('Ижевск • Москва • Санкт-Петербург', {
        x: 2.5, y: 5.05, w: 5, h: 0.35,
        fontSize: 14, color: 'FFFFFF',
        fontFace: 'Arial', align: 'center'
      });

      // Слайд 6: Кейсы 1-4
      const slide6 = pptx.addSlide();
      slide6.background = { color: colorBlack };
      slide6.addText('Наши кейсы', {
        x: 1, y: 0.5, w: 8, h: 0.7,
        fontSize: 42, bold: true, color: 'FFFFFF',
        fontFace: 'Arial', align: 'center'
      });

      cases.slice(0, 4).forEach((caseItem, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const xPos = 0.5 + col * 5.0;
        const yPos = 1.7 + row * 1.9;
        
        slide6.addShape(pptx.ShapeType.rect, {
          x: xPos, y: yPos, w: 0.5, h: 0.5,
          fill: { color: colorBurgundy }
        });
        slide6.addText(`${i + 1}`, {
          x: xPos, y: yPos, w: 0.5, h: 0.5,
          fontSize: 22, bold: true, color: 'FFFFFF',
          fontFace: 'Arial', align: 'center', valign: 'middle'
        });
        
        slide6.addText(caseItem.title, {
          x: xPos + 0.65, y: yPos, w: 3.8, h: 0.35,
          fontSize: 16, bold: true, color: 'FFFFFF',
          fontFace: 'Arial'
        });
        slide6.addText(caseItem.task, {
          x: xPos + 0.65, y: yPos + 0.4, w: 3.8, h: 0.25,
          fontSize: 10, color: 'CCCCCC',
          fontFace: 'Arial'
        });
        
        slide6.addShape(pptx.ShapeType.rect, {
          x: xPos + 0.65, y: yPos + 0.75, w: 3.8, h: 0.5,
          fill: { color: colorGreen }
        });
        slide6.addText(caseItem.result, {
          x: xPos + 0.75, y: yPos + 0.85, w: 3.6, h: 0.3,
          fontSize: 11, bold: true, color: 'FFFFFF',
          fontFace: 'Arial', valign: 'middle'
        });
      });

      // Слайд 7: Кейс 5
      const slide7 = pptx.addSlide();
      slide7.background = { color: colorGreen };
      slide7.addText('Еще кейсы', {
        x: 1, y: 0.5, w: 8, h: 0.7,
        fontSize: 42, bold: true, color: 'FFFFFF',
        fontFace: 'Arial', align: 'center'
      });

      slide7.addShape(pptx.ShapeType.rect, {
        x: 2, y: 2.2, w: 0.6, h: 0.6,
        fill: { color: colorBurgundy }
      });
      slide7.addText('5', {
        x: 2, y: 2.2, w: 0.6, h: 0.6,
        fontSize: 26, bold: true, color: 'FFFFFF',
        fontFace: 'Arial', align: 'center', valign: 'middle'
      });
      
      slide7.addText(cases[4].title, {
        x: 2.8, y: 2.2, w: 5, h: 0.5,
        fontSize: 24, bold: true, color: 'FFFFFF',
        fontFace: 'Arial'
      });
      slide7.addText(cases[4].task, {
        x: 2.8, y: 2.8, w: 5, h: 0.35,
        fontSize: 14, color: 'DDDDDD',
        fontFace: 'Arial'
      });
      
      slide7.addShape(pptx.ShapeType.rect, {
        x: 2.8, y: 3.3, w: 5, h: 0.6,
        fill: { color: colorBlack, transparency: 30 }
      });
      slide7.addText(cases[4].result, {
        x: 2.9, y: 3.4, w: 4.8, h: 0.4,
        fontSize: 16, bold: true, color: 'FFFFFF',
        fontFace: 'Arial', valign: 'middle'
      });

      // Слайд 8: Контакты
      const slide8 = pptx.addSlide();
      slide8.background = { color: colorCream };
      slide8.addText('Давайте обсудим ваши задачи!', {
        x: 1, y: 1.2, w: 8, h: 0.7,
        fontSize: 40, bold: true, color: colorBlack,
        fontFace: 'Arial', align: 'center'
      });

      slide8.addText('Софья Самойлова', {
        x: 2, y: 2.4, w: 6, h: 0.5,
        fontSize: 28, bold: true, color: colorBlack,
        fontFace: 'Arial', align: 'center'
      });
      slide8.addText('Директор по экспорту', {
        x: 2, y: 2.9, w: 6, h: 0.35,
        fontSize: 16, color: '666666',
        fontFace: 'Arial', align: 'center'
      });

      slide8.addText('s.samoylova@cdm.team', {
        x: 2.5, y: 3.6, w: 5, h: 0.35,
        fontSize: 15, color: colorBlack,
        fontFace: 'Arial', align: 'center'
      });
      slide8.addText('+7 922 525 65 75', {
        x: 2.5, y: 4.0, w: 5, h: 0.35,
        fontSize: 15, color: colorBlack,
        fontFace: 'Arial', align: 'center'
      });
      slide8.addText('centredigital.ru', {
        x: 2.5, y: 4.4, w: 5, h: 0.35,
        fontSize: 15, color: colorBlack,
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
    <div className="min-h-screen bg-gray-100">
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#6B2C2C] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="font-bold text-lg text-[#1A1A1A]">Centre digital & media</span>
            </div>
            <div className="flex gap-2">
              <Button onClick={exportToPDF} disabled={isExporting} className="gap-2 bg-[#6B2C2C] hover:bg-[#541F1F]">
                <Icon name="FileText" size={18} />
                {isExporting ? 'Экспорт...' : 'PDF'}
              </Button>
              <Button onClick={exportToPPTX} disabled={isExporting} className="gap-2 bg-[#2F5745] hover:bg-[#1F3A2E]">
                <Icon name="Presentation" size={18} />
                {isExporting ? 'Экспорт...' : 'PPTX'}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20" style={{ fontFamily: 'Arial, sans-serif' }}>
        {/* Слайд 1: Титульный */}
        <div className="slide w-full bg-[#1A1A1A] flex items-center justify-center" style={{ aspectRatio: '16/9' }}>
          <div className="text-center text-white px-8">
            <h1 className="text-6xl font-bold mb-6" style={{ lineHeight: '1.3' }}>
              Ваш надежный<br />PR-партнер
            </h1>
            <p className="text-3xl mb-8 text-gray-300">для выхода в Россию</p>
            <div className="inline-block bg-[#6B2C2C]/70 px-8 py-4 rounded-lg">
              <p className="text-lg text-white">Полный цикл услуг для продвижения бренда в регионах</p>
            </div>
          </div>
        </div>

        {/* Слайд 2: Российский рынок */}
        <div className="slide w-full bg-[#FAF8F5] flex items-center" style={{ aspectRatio: '16/9' }}>
          <div className="container mx-auto px-12 grid grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-[#1A1A1A] mb-8">Российский рынок сегодня</h2>
              <div className="space-y-3">
                {marketPoints.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#6B2C2C] rounded-full flex-shrink-0"></div>
                    <p className="text-lg text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#6B2C2C] p-10 rounded-2xl text-white text-center">
              <div className="text-8xl font-bold mb-4">85%</div>
              <p className="text-2xl">ваших клиентов живут<br />за пределами Москвы</p>
            </div>
          </div>
        </div>

        {/* Слайд 3: Регионы */}
        <div className="slide w-full bg-[#2F5745] flex items-center" style={{ aspectRatio: '16/9' }}>
          <div className="container mx-auto px-8">
            <h2 className="text-5xl font-bold text-white text-center mb-10">Главный актив – регионы!</h2>
            <div className="grid grid-cols-4 gap-4 mb-8">
              {cities.slice(0, 4).map((city, i) => (
                <div key={i} className="bg-black/30 p-5 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-2">{city.name}</h3>
                  <p className="text-sm text-gray-300">{city.description}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {cities.slice(4).map((city, i) => (
                <div key={i} className="bg-black/30 p-5 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-2">{city.name}</h3>
                  <p className="text-sm text-gray-300">{city.description}</p>
                </div>
              ))}
            </div>
            <p className="text-2xl text-white text-center font-bold">19 лет работы в регионах России</p>
          </div>
        </div>

        {/* Слайд 4: Услуги */}
        <div className="slide w-full bg-[#FAF8F5] flex items-center" style={{ aspectRatio: '16/9' }}>
          <div className="container mx-auto px-8">
            <h2 className="text-5xl font-bold text-center mb-2 text-[#1A1A1A]">Centre digital & media</h2>
            <p className="text-xl text-center text-gray-600 mb-10">Ваш PR-мост в Россию</p>
            <div className="grid grid-cols-3 gap-6">
              {services.map((service, i) => (
                <div key={i} className="bg-white p-6 rounded-lg border border-gray-300">
                  <h3 className="text-lg font-bold mb-2 text-[#1A1A1A]">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Слайд 5: Преимущества */}
        <div className="slide w-full bg-white flex items-center" style={{ aspectRatio: '16/9' }}>
          <div className="container mx-auto px-8">
            <h2 className="text-5xl font-bold text-center mb-10 text-[#1A1A1A]">Почему мы?</h2>
            <div className="grid grid-cols-3 gap-6 mb-10">
              {advantages.map((adv, i) => (
                <div key={i} className="bg-[#FAF8F5] p-6 rounded-lg border-l-4 border-[#6B2C2C]">
                  <h3 className="text-xl font-bold mb-2 text-[#1A1A1A]">{adv.title}</h3>
                  <p className="text-sm text-gray-600">{adv.text}</p>
                </div>
              ))}
            </div>
            <div className="bg-[#6B2C2C] py-6 rounded-xl text-center">
              <p className="text-3xl font-bold text-white mb-1">100+ специалистов</p>
              <p className="text-base text-white">Ижевск • Москва • Санкт-Петербург</p>
            </div>
          </div>
        </div>

        {/* Слайд 6: Кейсы 1-4 */}
        <div className="slide w-full bg-[#1A1A1A] flex items-center" style={{ aspectRatio: '16/9' }}>
          <div className="container mx-auto px-8">
            <h2 className="text-5xl font-bold text-white text-center mb-10">Наши кейсы</h2>
            <div className="grid grid-cols-2 gap-8">
              {cases.slice(0, 4).map((caseItem, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 bg-[#6B2C2C] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-white">{i + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{caseItem.title}</h3>
                    <p className="text-sm text-gray-400 mb-3">{caseItem.task}</p>
                    <div className="bg-[#2F5745] px-4 py-3 rounded-lg">
                      <p className="text-sm font-bold text-white">{caseItem.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Слайд 7: Кейс 5 */}
        <div className="slide w-full bg-[#2F5745] flex items-center" style={{ aspectRatio: '16/9' }}>
          <div className="container mx-auto px-8">
            <h2 className="text-5xl font-bold text-white text-center mb-16">Еще кейсы</h2>
            <div className="max-w-3xl mx-auto flex gap-6">
              <div className="w-16 h-16 bg-[#6B2C2C] rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-3xl font-bold text-white">5</span>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-white mb-3">{cases[4].title}</h3>
                <p className="text-lg text-gray-300 mb-4">{cases[4].task}</p>
                <div className="bg-black/30 px-6 py-4 rounded-lg">
                  <p className="text-lg font-bold text-white">{cases[4].result}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Слайд 8: Контакты */}
        <div className="slide w-full bg-[#FAF8F5] flex items-center" style={{ aspectRatio: '16/9' }}>
          <div className="container mx-auto px-8 text-center">
            <h2 className="text-5xl font-bold text-[#1A1A1A] mb-12">Давайте обсудим ваши задачи!</h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-4xl font-bold text-[#1A1A1A] mb-2">Софья Самойлова</p>
              <p className="text-xl text-gray-600 mb-8">Директор по экспорту</p>
              <div className="space-y-3 text-lg text-[#1A1A1A]">
                <p>s.samoylova@cdm.team</p>
                <p>+7 922 525 65 75</p>
                <p>centredigital.ru</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
