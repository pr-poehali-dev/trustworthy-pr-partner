import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import pptxgen from 'pptxgenjs';

const Index = () => {
  const [isExporting, setIsExporting] = useState(false);

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
          backgroundColor: '#ffffff'
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
      pptx.layout = 'LAYOUT_WIDE';
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
        x: 1, y: 1.5, w: 8, h: 2,
        fontSize: 60, bold: true, color: 'FFFFFF',
        fontFace: 'Montserrat', align: 'center'
      });
      slide1.addText('для выхода в Россию', {
        x: 1, y: 3.5, w: 8, h: 0.8,
        fontSize: 32, color: 'CCCCCC',
        fontFace: 'Montserrat', align: 'center'
      });
      slide1.addText('Полный цикл услуг для продвижения бренда в регионах', {
        x: 2, y: 4.5, w: 6, h: 0.6,
        fontSize: 18, color: 'FFFFFF',
        fontFace: 'Open Sans', align: 'center',
        fill: { color: colorBurgundy, transparency: 30 }
      });

      // Слайд 2: Российский рынок
      const slide2 = pptx.addSlide();
      slide2.background = { color: colorCream };
      slide2.addText('Российский рынок сегодня', {
        x: 0.5, y: 0.5, w: 4.5, h: 1,
        fontSize: 44, bold: true, color: colorBlack,
        fontFace: 'Montserrat'
      });
      
      const marketPoints = [
        '80+ млн активных потребителей',
        'Свободные ниши после 2022',
        'Интерес к дружественным странам',
        'СНГ и Азия воспринимаются как "свои"'
      ];
      
      marketPoints.forEach((text, i) => {
        slide2.addText('●', {
          x: 0.5, y: 1.8 + i * 0.6, w: 0.3, h: 0.4,
          fontSize: 16, color: colorBurgundy
        });
        slide2.addText(text, {
          x: 0.9, y: 1.8 + i * 0.6, w: 4, h: 0.4,
          fontSize: 18, color: '333333',
          fontFace: 'Open Sans'
        });
      });

      slide2.addText('85%', {
        x: 5.5, y: 1.5, w: 3.5, h: 1.5,
        fontSize: 80, bold: true, color: 'FFFFFF',
        fontFace: 'Montserrat', align: 'center',
        fill: { color: colorBurgundy }
      });
      slide2.addText('ваших клиентов живут\nза пределами Москвы', {
        x: 5.5, y: 3.2, w: 3.5, h: 1,
        fontSize: 20, color: 'FFFFFF',
        fontFace: 'Open Sans', align: 'center',
        fill: { color: colorBurgundy }
      });

      // Слайд 3: Регионы
      const slide3 = pptx.addSlide();
      slide3.background = { color: colorGreen };
      slide3.addText('Главный актив – регионы!', {
        x: 0.5, y: 0.5, w: 9, h: 1,
        fontSize: 48, bold: true, color: 'FFFFFF',
        fontFace: 'Montserrat', align: 'center'
      });

      cities.forEach((city, i) => {
        const col = i % 4;
        const row = Math.floor(i / 4);
        slide3.addText(city.name, {
          x: 0.3 + col * 2.35, y: 1.8 + row * 1.2, w: 2.2, h: 0.5,
          fontSize: 20, bold: true, color: 'FFFFFF',
          fontFace: 'Montserrat',
          fill: { color: colorBlack, transparency: 30 }
        });
        slide3.addText(city.description, {
          x: 0.3 + col * 2.35, y: 2.3 + row * 1.2, w: 2.2, h: 0.6,
          fontSize: 12, color: 'DDDDDD',
          fontFace: 'Open Sans',
          fill: { color: colorBlack, transparency: 30 }
        });
      });

      slide3.addText('19 лет работы в регионах России', {
        x: 1, y: 4.8, w: 8, h: 0.6,
        fontSize: 22, bold: true, color: 'FFFFFF',
        fontFace: 'Montserrat', align: 'center'
      });

      // Слайд 4: Услуги
      const slide4 = pptx.addSlide();
      slide4.background = { color: colorCream };
      slide4.addText('Centre digital & media', {
        x: 1, y: 0.5, w: 8, h: 0.7,
        fontSize: 42, bold: true, color: colorBlack,
        fontFace: 'Montserrat', align: 'center'
      });
      slide4.addText('Ваш PR-мост в Россию', {
        x: 1, y: 1.2, w: 8, h: 0.5,
        fontSize: 20, color: '666666',
        fontFace: 'Open Sans', align: 'center'
      });

      services.forEach((service, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        slide4.addText(service.title, {
          x: 0.3 + col * 3.3, y: 2.2 + row * 1.4, w: 3, h: 0.5,
          fontSize: 16, bold: true, color: colorBlack,
          fontFace: 'Montserrat',
          fill: { color: 'FFFFFF' }
        });
        slide4.addText(service.description, {
          x: 0.3 + col * 3.3, y: 2.7 + row * 1.4, w: 3, h: 0.7,
          fontSize: 12, color: '555555',
          fontFace: 'Open Sans',
          fill: { color: 'FFFFFF' }
        });
      });

      // Слайд 5: Преимущества
      const slide5 = pptx.addSlide();
      slide5.background = { color: 'FFFFFF' };
      slide5.addText('Почему мы?', {
        x: 1, y: 0.5, w: 8, h: 0.8,
        fontSize: 44, bold: true, color: colorBlack,
        fontFace: 'Montserrat', align: 'center'
      });

      advantages.forEach((adv, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        slide5.addText(adv.title, {
          x: 0.3 + col * 3.3, y: 1.8 + row * 1.5, w: 3, h: 0.5,
          fontSize: 20, bold: true, color: colorBlack,
          fontFace: 'Montserrat',
          fill: { color: colorCream }
        });
        slide5.addText(adv.text, {
          x: 0.3 + col * 3.3, y: 2.3 + row * 1.5, w: 3, h: 0.6,
          fontSize: 14, color: '555555',
          fontFace: 'Open Sans',
          fill: { color: colorCream }
        });
      });

      slide5.addText('100+ специалистов', {
        x: 2.5, y: 4.8, w: 5, h: 0.5,
        fontSize: 28, bold: true, color: 'FFFFFF',
        fontFace: 'Montserrat', align: 'center',
        fill: { color: colorBurgundy }
      });
      slide5.addText('Ижевск • Москва • Санкт-Петербург', {
        x: 2.5, y: 5.3, w: 5, h: 0.4,
        fontSize: 16, color: 'FFFFFF',
        fontFace: 'Open Sans', align: 'center',
        fill: { color: colorBurgundy }
      });

      // Слайд 6: Кейсы 1-4
      const slide6 = pptx.addSlide();
      slide6.background = { color: colorBlack };
      slide6.addText('Наши кейсы', {
        x: 1, y: 0.5, w: 8, h: 0.8,
        fontSize: 48, bold: true, color: 'FFFFFF',
        fontFace: 'Montserrat', align: 'center'
      });

      cases.slice(0, 4).forEach((caseItem, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        slide6.addText(`${i + 1}`, {
          x: 0.5 + col * 5, y: 1.8 + row * 1.8, w: 0.5, h: 0.5,
          fontSize: 24, bold: true, color: 'FFFFFF',
          fontFace: 'Montserrat', align: 'center',
          fill: { color: colorBurgundy }
        });
        slide6.addText(caseItem.title, {
          x: 1.2 + col * 5, y: 1.8 + row * 1.8, w: 3.5, h: 0.4,
          fontSize: 18, bold: true, color: 'FFFFFF',
          fontFace: 'Montserrat'
        });
        slide6.addText(caseItem.description, {
          x: 1.2 + col * 5, y: 2.2 + row * 1.8, w: 3.5, h: 0.8,
          fontSize: 12, color: 'CCCCCC',
          fontFace: 'Open Sans'
        });
      });

      // Слайд 7: Кейсы 5-8
      const slide7 = pptx.addSlide();
      slide7.background = { color: colorBlack };
      slide7.addText('Наши кейсы', {
        x: 1, y: 0.5, w: 8, h: 0.8,
        fontSize: 48, bold: true, color: 'FFFFFF',
        fontFace: 'Montserrat', align: 'center'
      });

      cases.slice(4, 8).forEach((caseItem, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        slide7.addText(`${i + 5}`, {
          x: 0.5 + col * 5, y: 1.8 + row * 1.8, w: 0.5, h: 0.5,
          fontSize: 24, bold: true, color: 'FFFFFF',
          fontFace: 'Montserrat', align: 'center',
          fill: { color: colorBurgundy }
        });
        slide7.addText(caseItem.title, {
          x: 1.2 + col * 5, y: 1.8 + row * 1.8, w: 3.5, h: 0.4,
          fontSize: 18, bold: true, color: 'FFFFFF',
          fontFace: 'Montserrat'
        });
        slide7.addText(caseItem.description, {
          x: 1.2 + col * 5, y: 2.2 + row * 1.8, w: 3.5, h: 0.8,
          fontSize: 12, color: 'CCCCCC',
          fontFace: 'Open Sans'
        });
      });

      // Слайд 8: Контакты
      const slide8 = pptx.addSlide();
      slide8.background = { color: colorCream };
      slide8.addText('Давайте обсудим ваш проект!', {
        x: 1, y: 1.5, w: 8, h: 1,
        fontSize: 48, bold: true, color: colorBlack,
        fontFace: 'Montserrat', align: 'center'
      });

      const contacts = [
        'Телефон: +7 (341) 290-72-72',
        'Email: info@centre-media.ru',
        'Сайт: www.centre-media.ru',
        'Адрес: г. Ижевск, ул. Пушкинская, 270'
      ];

      contacts.forEach((contact, i) => {
        slide8.addText(contact, {
          x: 2, y: 3 + i * 0.4, w: 6, h: 0.4,
          fontSize: 18, color: '333333',
          fontFace: 'Open Sans', align: 'center'
        });
      });

      await pptx.writeFile({ fileName: 'Centre-Digital-Media.pptx' });
    } catch (error) {
      console.error('Error generating PPTX:', error);
    } finally {
      setIsExporting(false);
    }
  };

  const services = [
    {
      icon: '📱',
      title: 'PR в регионах',
      description: 'Работа с 50+ городами России через проверенные каналы'
    },
    {
      icon: '📺',
      title: 'Публикации в СМИ',
      description: '1000+ контактов журналистов и редакторов'
    },
    {
      icon: '🎯',
      title: 'Продвижение на маркетплейсах',
      description: 'Комплексное продвижение на Ozon, Wildberries, Яндекс.Маркет'
    },
    {
      icon: '💼',
      title: 'Корпоративные мероприятия',
      description: 'От небольших встреч до масштабных конференций'
    },
    {
      icon: '📊',
      title: 'Консалтинг',
      description: 'Стратегия входа на российский рынок'
    },
    {
      icon: '🌐',
      title: 'Digital-маркетинг',
      description: 'Таргет, SEO, контекст, соцсети'
    }
  ];

  const cities = [
    { name: 'Казань', description: '1,3 млн жителей' },
    { name: 'Екатеринбург', description: '1,5 млн жителей' },
    { name: 'Новосибирск', description: '1,6 млн жителей' },
    { name: 'Нижний Новгород', description: '1,2 млн жителей' },
    { name: 'Челябинск', description: '1,2 млн жителей' },
    { name: 'Самара', description: '1,1 млн жителей' },
    { name: 'Уфа', description: '1,1 млн жителей' },
    { name: 'Ростов-на-Дону', description: '1,1 млн жителей' }
  ];

  const advantages = [
    { title: 'Опыт', text: '19 лет в PR и маркетинге' },
    { title: 'Регионы', text: 'Работаем в 50+ городах' },
    { title: 'Результат', text: 'Гарантированные публикации' },
    { title: 'Команда', text: '100+ профессионалов' },
    { title: 'Подход', text: 'Индивидуальная стратегия' },
    { title: 'Связи', text: 'База 1000+ контактов СМИ' }
  ];

  const cases = [
    {
      title: 'Запуск Xiaomi в регионах',
      description: 'Организация 15 презентаций в 10 городах, 200+ публикаций в федеральных и региональных СМИ'
    },
    {
      title: 'PR для экотуризма',
      description: 'Продвижение туристических маршрутов Урала, рост запросов на 340%'
    },
    {
      title: 'Выход HiSense на рынок',
      description: 'Запуск бренда бытовой техники в 20 регионах, 150+ публикаций за 3 месяца'
    },
    {
      title: 'Продвижение Haval',
      description: 'Поддержка запуска новых моделей в регионах, организация тест-драйвов в 25 городах'
    },
    {
      title: 'Кампания для CHERY',
      description: '50+ мероприятий в регионах, охват аудитории 2 млн человек'
    },
    {
      title: 'Geely – PR в регионах',
      description: 'Информационная поддержка дилерской сети, 180+ публикаций в год'
    },
    {
      title: 'Продвижение GAC',
      description: 'Запуск нового бренда в России, организация дилерских конференций'
    },
    {
      title: 'Changan – выход на рынок',
      description: 'Полный цикл PR-поддержки: от стратегии до региональных активаций'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Export Controls */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <Button onClick={exportToPDF} disabled={isExporting} variant="default">
          {isExporting ? 'Экспорт...' : 'Скачать PDF'}
        </Button>
        <Button onClick={exportToPPTX} disabled={isExporting} variant="default">
          {isExporting ? 'Экспорт...' : 'Скачать PPTX'}
        </Button>
      </div>

      {/* Slides Container */}
      <div className="flex flex-col items-center gap-8 p-8">
        
        {/* Slide 1: Title */}
        <div className="slide w-[1280px] h-[720px] bg-[#1A1A1A] flex flex-col items-center justify-center relative overflow-hidden">
          <h1 className="text-[80px] font-bold text-white text-center leading-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Ваш надежный<br />PR-партнер
          </h1>
          <p className="text-[42px] text-[#CCCCCC] mt-6 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            для выхода в Россию
          </p>
          <div className="mt-8 bg-[#6B2C2C] bg-opacity-70 px-12 py-4">
            <p className="text-[24px] text-white text-center" style={{ fontFamily: 'sans-serif' }}>
              Полный цикл услуг для продвижения бренда в регионах
            </p>
          </div>
        </div>

        {/* Slide 2: Market */}
        <div className="slide w-[1280px] h-[720px] bg-[#FAF8F5] p-12 relative">
          <h2 className="text-[58px] font-bold text-[#1A1A1A] mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Российский рынок сегодня
          </h2>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              {[
                '80+ млн активных потребителей',
                'Свободные ниши после 2022',
                'Интерес к дружественным странам',
                'СНГ и Азия воспринимаются как "свои"'
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[22px] text-[#6B2C2C] mt-1">●</span>
                  <p className="text-[24px] text-[#333333]" style={{ fontFamily: 'sans-serif' }}>
                    {text}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col items-center justify-center">
              <div className="bg-[#6B2C2C] w-full h-[200px] flex items-center justify-center">
                <h3 className="text-[106px] font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  85%
                </h3>
              </div>
              <div className="bg-[#6B2C2C] w-full mt-4 py-6">
                <p className="text-[26px] text-white text-center leading-relaxed" style={{ fontFamily: 'sans-serif' }}>
                  ваших клиентов живут<br />за пределами Москвы
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 3: Regions */}
        <div className="slide w-[1280px] h-[720px] bg-[#2F5745] p-12 flex flex-col">
          <h2 className="text-[64px] font-bold text-white text-center mb-12" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Главный актив – регионы!
          </h2>
          
          <div className="grid grid-cols-4 gap-4 flex-1">
            {cities.map((city, i) => (
              <div key={i} className="bg-[#1A1A1A] bg-opacity-30 p-6 flex flex-col justify-between">
                <h3 className="text-[26px] font-bold text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {city.name}
                </h3>
                <p className="text-[16px] text-[#DDDDDD]" style={{ fontFamily: 'sans-serif' }}>
                  {city.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <p className="text-[29px] font-bold text-white text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              19 лет работы в регионах России
            </p>
          </div>
        </div>

        {/* Slide 4: Services */}
        <div className="slide w-[1280px] h-[720px] bg-[#FAF8F5] p-12">
          <h2 className="text-[56px] font-bold text-[#1A1A1A] text-center mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Centre digital & media
          </h2>
          <p className="text-[26px] text-[#666666] text-center mb-12" style={{ fontFamily: 'sans-serif' }}>
            Ваш PR-мост в Россию
          </p>
          
          <div className="grid grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-white p-6 shadow-sm">
                <h3 className="text-[21px] font-bold text-[#1A1A1A] mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {service.title}
                </h3>
                <p className="text-[16px] text-[#555555] leading-relaxed" style={{ fontFamily: 'sans-serif' }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Slide 5: Advantages */}
        <div className="slide w-[1280px] h-[720px] bg-white p-12 flex flex-col">
          <h2 className="text-[58px] font-bold text-[#1A1A1A] text-center mb-12" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Почему мы?
          </h2>
          
          <div className="grid grid-cols-3 gap-6 flex-1">
            {advantages.map((adv, i) => (
              <div key={i} className="bg-[#FAF8F5] p-6">
                <h3 className="text-[26px] font-bold text-[#1A1A1A] mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {adv.title}
                </h3>
                <p className="text-[18px] text-[#555555]" style={{ fontFamily: 'sans-serif' }}>
                  {adv.text}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <div className="bg-[#6B2C2C] py-4">
              <p className="text-[37px] font-bold text-white text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                100+ специалистов
              </p>
              <p className="text-[21px] text-white text-center mt-2" style={{ fontFamily: 'sans-serif' }}>
                Ижевск • Москва • Санкт-Петербург
              </p>
            </div>
          </div>
        </div>

        {/* Slide 6: Cases 1-4 */}
        <div className="slide w-[1280px] h-[720px] bg-[#1A1A1A] p-12">
          <h2 className="text-[64px] font-bold text-white text-center mb-12" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Наши кейсы
          </h2>
          
          <div className="grid grid-cols-2 gap-x-12 gap-y-8">
            {cases.slice(0, 4).map((caseItem, i) => (
              <div key={i} className="flex gap-4">
                <div className="bg-[#6B2C2C] w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <span className="text-[32px] font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {i + 1}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-[24px] font-bold text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {caseItem.title}
                  </h3>
                  <p className="text-[16px] text-[#CCCCCC] leading-relaxed" style={{ fontFamily: 'sans-serif' }}>
                    {caseItem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide 7: Cases 5-8 */}
        <div className="slide w-[1280px] h-[720px] bg-[#1A1A1A] p-12">
          <h2 className="text-[64px] font-bold text-white text-center mb-12" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Наши кейсы
          </h2>
          
          <div className="grid grid-cols-2 gap-x-12 gap-y-8">
            {cases.slice(4, 8).map((caseItem, i) => (
              <div key={i} className="flex gap-4">
                <div className="bg-[#6B2C2C] w-16 h-16 flex items-center justify-center flex-shrink-0">
                  <span className="text-[32px] font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {i + 5}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-[24px] font-bold text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {caseItem.title}
                  </h3>
                  <p className="text-[16px] text-[#CCCCCC] leading-relaxed" style={{ fontFamily: 'sans-serif' }}>
                    {caseItem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide 8: Contacts */}
        <div className="slide w-[1280px] h-[720px] bg-[#FAF8F5] flex flex-col items-center justify-center p-12">
          <h2 className="text-[64px] font-bold text-[#1A1A1A] text-center mb-16" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Давайте обсудим ваш проект!
          </h2>
          
          <div className="space-y-5">
            <p className="text-[24px] text-[#333333] text-center" style={{ fontFamily: 'sans-serif' }}>
              Телефон: +7 (341) 290-72-72
            </p>
            <p className="text-[24px] text-[#333333] text-center" style={{ fontFamily: 'sans-serif' }}>
              Email: info@centre-media.ru
            </p>
            <p className="text-[24px] text-[#333333] text-center" style={{ fontFamily: 'sans-serif' }}>
              Сайт: www.centre-media.ru
            </p>
            <p className="text-[24px] text-[#333333] text-center" style={{ fontFamily: 'sans-serif' }}>
              Адрес: г. Ижевск, ул. Пушкинская, 270
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Index;
