import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import pptxgen from 'pptxgenjs';

const Index = () => {
  const [isExporting, setIsExporting] = useState(false);

  const slides = [
    {
      type: 'hero',
      title: 'Ваш PR-партнер в России',
      subtitle: 'Centre digital & media',
      image: 'https://cdn.poehali.dev/projects/e66ab057-293c-4d59-8667-fe6f2698070b/files/b4db37b8-11ab-4f67-85a0-b25f3182fa7f.jpg'
    },
    {
      type: 'stat',
      number: '80M+',
      text: 'активных потребителей',
      subtitle: 'Российский рынок',
      image: 'https://cdn.poehali.dev/projects/e66ab057-293c-4d59-8667-fe6f2698070b/files/3a14129a-c79c-4946-8e47-49aa3e711ec4.jpg'
    },
    {
      type: 'stat',
      number: '85%',
      text: 'клиентов за пределами Москвы',
      subtitle: '7+ городов-миллионников',
      image: 'https://cdn.poehali.dev/projects/e66ab057-293c-4d59-8667-fe6f2698070b/files/b0b31714-4884-4362-80d9-4fc5e12d952f.jpg'
    },
    {
      type: 'services',
      title: 'Полный цикл услуг',
      items: ['Стратегия', 'Контент', 'PR & GR', 'Продакшн', 'Медиазакупки', 'Аналитика'],
      image: 'https://cdn.poehali.dev/projects/e66ab057-293c-4d59-8667-fe6f2698070b/files/10dc3bdb-88f9-455d-af5d-63e32968650d.jpg'
    },
    {
      type: 'stat',
      number: '19',
      text: 'лет опыта',
      subtitle: '100+ специалистов',
      image: 'https://cdn.poehali.dev/projects/e66ab057-293c-4d59-8667-fe6f2698070b/files/b73539d8-be92-4ec8-b63e-bdd3ee4c44ae.jpg'
    },
    {
      type: 'case',
      number: '1',
      title: 'Федеральный блог-тур',
      result: '400K+ просмотров • KPI × 3.5',
      image: 'https://cdn.poehali.dev/projects/e66ab057-293c-4d59-8667-fe6f2698070b/files/abac6784-6ebc-4c35-8612-be88797211c6.jpg'
    },
    {
      type: 'case',
      number: '2',
      title: 'Бренд-платформа для пельменей',
      result: 'Выход в федеральные сети',
      image: 'https://cdn.poehali.dev/projects/e66ab057-293c-4d59-8667-fe6f2698070b/files/6c6d717c-ef16-4af9-b144-8d9a6d24786d.jpg'
    },
    {
      type: 'case',
      number: '3',
      title: 'ВДНХ Россия',
      result: '1M посетителей • 14M охватов',
      image: 'https://cdn.poehali.dev/projects/e66ab057-293c-4d59-8667-fe6f2698070b/files/b4db37b8-11ab-4f67-85a0-b25f3182fa7f.jpg'
    },
    {
      type: 'case',
      number: '4',
      title: 'Хоккейный марафон',
      result: '30+ регионов • 810K просмотров',
      image: 'https://cdn.poehali.dev/projects/e66ab057-293c-4d59-8667-fe6f2698070b/files/abac6784-6ebc-4c35-8612-be88797211c6.jpg'
    },
    {
      type: 'case',
      number: '5',
      title: 'Имиджевый ролик региона',
      result: '500K просмотров',
      image: 'https://cdn.poehali.dev/projects/e66ab057-293c-4d59-8667-fe6f2698070b/files/abac6784-6ebc-4c35-8612-be88797211c6.jpg'
    },
    {
      type: 'case',
      number: '6',
      title: 'Инфлюенс для лакокрасочного завода',
      result: '+200% запросов по маркам',
      image: 'https://cdn.poehali.dev/projects/e66ab057-293c-4d59-8667-fe6f2698070b/files/10dc3bdb-88f9-455d-af5d-63e32968650d.jpg'
    },
    {
      type: 'case',
      number: '7',
      title: 'Экспортные видеоролики',
      result: 'Используются на выставках',
      image: 'https://cdn.poehali.dev/projects/e66ab057-293c-4d59-8667-fe6f2698070b/files/abac6784-6ebc-4c35-8612-be88797211c6.jpg'
    },
    {
      type: 'packages',
      title: 'Пакеты услуг',
      items: [
        { name: 'Исследования', price: '€1.5K-2.5K' },
        { name: 'Digital & SMM', price: '€3K-8K/мес' },
        { name: 'Контент', price: '€2.5K-6K' },
        { name: 'Видеопродакшн', price: '€2.5K-15K+' },
        { name: 'PR & СМИ', price: '€1.5K-5K' },
        { name: 'Полный цикл', price: '€8K-15K/мес' }
      ],
      image: 'https://cdn.poehali.dev/projects/e66ab057-293c-4d59-8667-fe6f2698070b/files/6c6d717c-ef16-4af9-b144-8d9a6d24786d.jpg'
    },
    {
      type: 'contact',
      name: 'Софья Самойлова',
      position: 'Директор по экспорту',
      email: 's.samoylova@cdm.team',
      phone: '+7 922 525 65 75',
      website: 'centredigital.ru',
      image: 'https://cdn.poehali.dev/projects/e66ab057-293c-4d59-8667-fe6f2698070b/files/b4db37b8-11ab-4f67-85a0-b25f3182fa7f.jpg'
    }
  ];

  const exportToPDF = async () => {
    setIsExporting(true);
    try {
      const slideElements = document.querySelectorAll('.slide');
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });

      for (let i = 0; i < slideElements.length; i++) {
        const slide = slideElements[i] as HTMLElement;
        const canvas = await html2canvas(slide, {
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: '#FFFFFF'
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

      slides.forEach((slide) => {
        const pptxSlide = pptx.addSlide();

        if (slide.type === 'hero') {
          pptxSlide.background = { path: slide.image };
          pptxSlide.addShape(pptx.ShapeType.rect, {
            x: 0, y: 0, w: '100%', h: '100%',
            fill: { color: '000000', transparency: 40 }
          });
          pptxSlide.addText(slide.subtitle, {
            x: 0.5, y: 2, w: 9, h: 0.5,
            fontSize: 20, color: 'FFFFFF', fontFace: 'Arial', align: 'center'
          });
          pptxSlide.addText(slide.title, {
            x: 0.5, y: 2.6, w: 9, h: 1,
            fontSize: 48, bold: true, color: 'FFFFFF', fontFace: 'Arial', align: 'center'
          });
        }

        if (slide.type === 'stat') {
          pptxSlide.background = { path: slide.image };
          pptxSlide.addShape(pptx.ShapeType.rect, {
            x: 0, y: 0, w: '100%', h: '100%',
            fill: { color: '000000', transparency: 50 }
          });
          pptxSlide.addText(slide.number, {
            x: 1, y: 1.5, w: 8, h: 1.5,
            fontSize: 120, bold: true, color: 'FFFFFF', fontFace: 'Arial', align: 'center'
          });
          pptxSlide.addText(slide.text, {
            x: 1, y: 3.2, w: 8, h: 0.6,
            fontSize: 32, color: 'FFFFFF', fontFace: 'Arial', align: 'center'
          });
          pptxSlide.addText(slide.subtitle, {
            x: 1, y: 4, w: 8, h: 0.4,
            fontSize: 18, color: 'CCCCCC', fontFace: 'Arial', align: 'center'
          });
        }

        if (slide.type === 'services') {
          pptxSlide.background = { path: slide.image };
          pptxSlide.addShape(pptx.ShapeType.rect, {
            x: 0, y: 0, w: '100%', h: '100%',
            fill: { color: '000000', transparency: 40 }
          });
          pptxSlide.addText(slide.title, {
            x: 0.5, y: 0.8, w: 9, h: 0.8,
            fontSize: 42, bold: true, color: 'FFFFFF', fontFace: 'Arial', align: 'center'
          });
          slide.items.forEach((item: string, i: number) => {
            const col = i % 3;
            const row = Math.floor(i / 3);
            pptxSlide.addShape(pptx.ShapeType.rect, {
              x: 0.8 + col * 3, y: 2.2 + row * 1.2, w: 2.8, h: 0.8,
              fill: { color: 'FFFFFF', transparency: 10 },
              line: { color: 'FFFFFF', width: 1 }
            });
            pptxSlide.addText(item, {
              x: 0.8 + col * 3, y: 2.2 + row * 1.2, w: 2.8, h: 0.8,
              fontSize: 18, bold: true, color: 'FFFFFF', fontFace: 'Arial', align: 'center', valign: 'middle'
            });
          });
        }

        if (slide.type === 'case') {
          pptxSlide.background = { path: slide.image };
          pptxSlide.addShape(pptx.ShapeType.rect, {
            x: 0, y: 0, w: '100%', h: '100%',
            fill: { color: '000000', transparency: 50 }
          });
          pptxSlide.addText(`Кейс ${slide.number}`, {
            x: 0.5, y: 0.8, w: 9, h: 0.5,
            fontSize: 16, color: '6B2C2C', fontFace: 'Arial'
          });
          pptxSlide.addText(slide.title, {
            x: 0.5, y: 1.5, w: 9, h: 1.5,
            fontSize: 44, bold: true, color: 'FFFFFF', fontFace: 'Arial', align: 'center', valign: 'middle'
          });
          pptxSlide.addShape(pptx.ShapeType.rect, {
            x: 1.5, y: 3.8, w: 7, h: 0.8,
            fill: { color: '6B2C2C' }
          });
          pptxSlide.addText(slide.result, {
            x: 1.5, y: 3.8, w: 7, h: 0.8,
            fontSize: 20, bold: true, color: 'FFFFFF', fontFace: 'Arial', align: 'center', valign: 'middle'
          });
        }

        if (slide.type === 'packages') {
          pptxSlide.background = { path: slide.image };
          pptxSlide.addShape(pptx.ShapeType.rect, {
            x: 0, y: 0, w: '100%', h: '100%',
            fill: { color: '000000', transparency: 40 }
          });
          pptxSlide.addText(slide.title, {
            x: 0.5, y: 0.6, w: 9, h: 0.7,
            fontSize: 40, bold: true, color: 'FFFFFF', fontFace: 'Arial', align: 'center'
          });
          slide.items.forEach((item: any, i: number) => {
            const col = i % 2;
            const row = Math.floor(i / 2);
            pptxSlide.addShape(pptx.ShapeType.rect, {
              x: 0.8 + col * 4.5, y: 1.6 + row * 1.1, w: 4.2, h: 0.9,
              fill: { color: i % 2 === 0 ? '6B2C2C' : '2F5745' }
            });
            pptxSlide.addText(item.name, {
              x: 1 + col * 4.5, y: 1.7 + row * 1.1, w: 3.8, h: 0.35,
              fontSize: 16, bold: true, color: 'FFFFFF', fontFace: 'Arial'
            });
            pptxSlide.addText(item.price, {
              x: 1 + col * 4.5, y: 2.1 + row * 1.1, w: 3.8, h: 0.3,
              fontSize: 14, color: 'FFFFFF', fontFace: 'Arial'
            });
          });
        }

        if (slide.type === 'contact') {
          pptxSlide.background = { path: slide.image };
          pptxSlide.addShape(pptx.ShapeType.rect, {
            x: 0, y: 0, w: '100%', h: '100%',
            fill: { color: '000000', transparency: 60 }
          });
          pptxSlide.addText('Давайте обсудим!', {
            x: 1, y: 1, w: 8, h: 0.8,
            fontSize: 42, bold: true, color: 'FFFFFF', fontFace: 'Arial', align: 'center'
          });
          pptxSlide.addShape(pptx.ShapeType.rect, {
            x: 2, y: 2.2, w: 6, h: 2,
            fill: { color: '6B2C2C' }
          });
          pptxSlide.addText(slide.name, {
            x: 2, y: 2.4, w: 6, h: 0.5,
            fontSize: 28, bold: true, color: 'FFFFFF', fontFace: 'Arial', align: 'center'
          });
          pptxSlide.addText(slide.position, {
            x: 2, y: 2.9, w: 6, h: 0.3,
            fontSize: 14, color: 'CCCCCC', fontFace: 'Arial', align: 'center'
          });
          pptxSlide.addText(`${slide.email}\n${slide.phone}\n${slide.website}`, {
            x: 2, y: 3.3, w: 6, h: 0.8,
            fontSize: 14, color: 'FFFFFF', fontFace: 'Arial', align: 'center'
          });
        }
      });

      await pptx.writeFile({ fileName: 'Centre-Digital-Media.pptx' });
    } catch (error) {
      console.error('Error generating PPTX:', error);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/98 backdrop-blur-xl shadow-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#6B2C2C] to-[#2F5745] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="font-semibold text-lg text-gray-800">Centre digital & media</span>
            </div>
            <div className="flex gap-2">
              <Button onClick={exportToPDF} disabled={isExporting} size="sm" className="gap-2 bg-[#6B2C2C] hover:bg-[#541F1F]">
                <Icon name="FileText" size={16} />
                PDF
              </Button>
              <Button onClick={exportToPPTX} disabled={isExporting} size="sm" className="gap-2 bg-[#2F5745] hover:bg-[#1F3A2E]">
                <Icon name="Presentation" size={16} />
                PPTX
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        {slides.map((slide, index) => {
          if (slide.type === 'hero') {
            return (
              <div key={index} className="slide h-screen relative overflow-hidden">
                <img src={slide.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60"></div>
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-8">
                  <div className="text-center space-y-6 max-w-4xl">
                    <p className="text-xl tracking-widest uppercase opacity-90">{slide.subtitle}</p>
                    <h1 className="text-8xl font-black leading-tight">{slide.title}</h1>
                  </div>
                </div>
              </div>
            );
          }

          if (slide.type === 'stat') {
            return (
              <div key={index} className="slide h-screen relative overflow-hidden">
                <img src={slide.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#2F5745]/80 via-[#2F5745]/70 to-black/80"></div>
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-8">
                  <div className="text-center space-y-8">
                    <div className="text-[180px] font-black leading-none tracking-tight">{slide.number}</div>
                    <div className="text-5xl font-light">{slide.text}</div>
                    <div className="text-2xl opacity-80">{slide.subtitle}</div>
                  </div>
                </div>
              </div>
            );
          }

          if (slide.type === 'services') {
            return (
              <div key={index} className="slide h-screen relative overflow-hidden">
                <img src={slide.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-[#6B2C2C]/60"></div>
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-12">
                  <h2 className="text-6xl font-black mb-16 text-center">{slide.title}</h2>
                  <div className="grid grid-cols-3 gap-6 max-w-5xl">
                    {slide.items.map((item, i) => (
                      <div key={i} className="bg-white/10 backdrop-blur-md border-2 border-white/30 px-8 py-10 rounded-2xl text-center hover:bg-white/20 transition-all">
                        <div className="text-2xl font-bold">{item}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          }

          if (slide.type === 'case') {
            return (
              <div key={index} className="slide h-screen relative overflow-hidden">
                <img src={slide.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70"></div>
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-12">
                  <div className="text-center space-y-10 max-w-4xl">
                    <div className="text-sm font-bold tracking-widest uppercase text-[#6B2C2C] bg-white px-4 py-2 rounded-full inline-block">Кейс {slide.number}</div>
                    <h2 className="text-6xl font-black leading-tight">{slide.title}</h2>
                    <div className="bg-gradient-to-r from-[#6B2C2C] to-[#2F5745] px-12 py-6 rounded-2xl">
                      <div className="text-3xl font-bold">{slide.result}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          if (slide.type === 'packages') {
            return (
              <div key={index} className="slide h-screen relative overflow-hidden">
                <img src={slide.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70"></div>
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-12">
                  <h2 className="text-6xl font-black mb-14 text-center">{slide.title}</h2>
                  <div className="grid grid-cols-2 gap-6 max-w-4xl">
                    {slide.items.map((item, i) => {
                      const bgColor = i % 2 === 0 ? 'from-[#6B2C2C] to-[#541F1F]' : 'from-[#2F5745] to-[#1F3A2E]';
                      return (
                        <div key={i} className={`bg-gradient-to-br ${bgColor} px-10 py-8 rounded-2xl text-center border-2 border-white/20`}>
                          <div className="text-3xl font-bold mb-3">{item.name}</div>
                          <div className="text-xl opacity-90">{item.price}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          }

          if (slide.type === 'contact') {
            return (
              <div key={index} className="slide h-screen relative overflow-hidden">
                <img src={slide.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-[#6B2C2C]/70"></div>
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-8">
                  <div className="text-center space-y-10">
                    <h2 className="text-6xl font-black">Давайте обсудим!</h2>
                    <div className="bg-gradient-to-r from-[#6B2C2C] to-[#541F1F] px-16 py-12 rounded-3xl border-4 border-white/20 space-y-4">
                      <div className="text-5xl font-black">{slide.name}</div>
                      <div className="text-xl opacity-90">{slide.position}</div>
                      <div className="h-px bg-white/20 my-6"></div>
                      <div className="text-2xl space-y-2">
                        <div>{slide.email}</div>
                        <div>{slide.phone}</div>
                        <div>{slide.website}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
};

export default Index;
