import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Index = () => {
  const [activeService, setActiveService] = useState(0);
  const [isExporting, setIsExporting] = useState(false);

  const exportToPDF = async () => {
    setIsExporting(true);
    try {
      const element = document.getElementById('pdf-content');
      if (!element) return;

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('Centre-Digital-Media-Presentation.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsExporting(false);
    }
  };

  const services = [
    {
      icon: 'Target',
      title: 'Стратегия и выход на рынок',
      description: 'Анализ ЦА, позиционирование, рекламные кампании'
    },
    {
      icon: 'FileText',
      title: 'Контент и коммуникации',
      description: 'Подготовка текстов, фото, видео и SMM под российскую аудиторию'
    },
    {
      icon: 'Users',
      title: 'PR и GR',
      description: 'Публикации в СМИ, работа с экспертами и блогерами'
    },
    {
      icon: 'Video',
      title: 'Продакшн',
      description: 'Видео и аудио: от Reels до имиджевых фильмов. Собственная студия и команда профессионалов'
    },
    {
      icon: 'TrendingUp',
      title: 'Медиазакупки',
      description: 'ТВ, радио, digital, наружка. Единое окно и полный контроль рекламной кампании и подрядчиков'
    },
    {
      icon: 'BarChart',
      title: 'Аналитика',
      description: 'Прозрачная отчётность по охватам, лидам и продажам в реальном времени'
    }
  ];

  const cities = [
    { name: 'Ижевск', description: 'Мощный промышленный кластер, оружейная столица России' },
    { name: 'Казань', description: 'Исторический перекресток культур и технологий' },
    { name: 'Екатеринбург', description: 'Промышленное сердце и деловая столица Урала' },
    { name: 'Новосибирск', description: 'Научный и логистический хаб Сибири' },
    { name: 'Краснодар', description: 'Аграрный и курортный центр Юга' },
    { name: 'Нижний Новгород', description: 'Индустриальный кластер Поволжья' },
    { name: 'Ростов-на-Дону', description: '«Ворота Кавказа» и крупный транспортный узел' }
  ];

  const advantages = [
    {
      icon: 'Award',
      title: '19 лет опыта',
      text: '19-летний опыт работы в маркетинге, контенте, аналитике, PR и GR. Знаем, как продвигаться в субъектах РФ и на страну в целом'
    },
    {
      icon: 'Users',
      title: 'Собственная команда',
      text: 'Опытные копирайтеры, дизайнеры, операторы, SMM-специалисты, продюсеры, продакшн'
    },
    {
      icon: 'Radio',
      title: 'Собственные медиа',
      text: 'Радиостанции, онлайн-СМИ, соцсети с многомиллионной аудиторией, прямой доступ к федеральным СМИ'
    },
    {
      icon: 'Package',
      title: 'Единое окно',
      text: 'Ведем клиентов комплексно – от стратегии до отчётности'
    },
    {
      icon: 'PieChart',
      title: 'Прозрачность',
      text: 'Четкое согласование целей до старта, регулярная отчётность по всем KPI'
    },
    {
      icon: 'Zap',
      title: 'Гибкость',
      text: 'Мобильнее и быстрее, чем крупные федеральные агентства'
    }
  ];

  const cases = [
    {
      title: 'Федеральный блог-тур',
      task: 'Организовать блог-тур для федеральных инфлюенсеров, чтобы сформировать новый, привлекательный образ республики как туристического направления',
      solution: 'Отобрали 10 релевантных блогеров (общая аудитория 1 млн+). Организовали трехдневный тур «под ключ»: логистика, уникальная программа, встречи с Главой республики',
      result: 'Более 70 публикаций, 400+ тыс. просмотров. Превысили KPI в 3.5 раза'
    },
    {
      title: 'Бренд-платформа для пельменей',
      task: 'Подготовить бренд-производителя пельменей к масштабированию и выходу в федеральные торговые сети',
      solution: 'Провели анализ рынка. Разработали логотип, фирменный стиль и брендбук. Подготовили три варианта дизайна упаковки, провели съёмку продукции',
      result: 'Полный пакет бренд-активов, готовый к производству и печати'
    },
    {
      title: 'Имиджевый ролик для региона',
      task: 'Создать яркий, запоминающийся ролик для Правительства Удмуртии на выставке-форуме «Россия» на ВДНХ',
      solution: 'Разработали уникальную концепцию с девушкой-символом региона. Провели съёмки, добавили графику и национальное аудио оформление',
      result: '55 000+ просмотров за первый день, более 100 000 просмотров всего'
    },
    {
      title: 'Инфлюенс-кампания для завода',
      task: 'Повысить узнаваемость бренда лакокрасочного завода за счет размещения у блогеров',
      solution: 'Отобрали блогеров в нишах DIY и ремонта. Организовали всё «под ключ»: переговоры, доставку, съёмки, контроль публикаций, UTM-отслеживание',
      result: 'Рост поисковых запросов по отдельным маркам до 200%, в целом по бренду – на 22%'
    },
    {
      title: 'Видео для экспортеров',
      task: 'Показать экспортерам Удмуртии, что их товары востребованы за рубежом',
      solution: 'Создали серию игровых видеороликов с героями из ОАЭ, Японии, Италии и Узбекистана. Для каждой страны – отдельная история с учётом менталитета',
      result: 'Ролики используются в digital-продвижении, на выставках и при работе с партнерами'
    }
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen" id="pdf-content">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="font-semibold text-xl text-secondary">Centre digital & media</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('about')} className="text-sm text-gray-700 hover:text-primary transition-colors">
                О нас
              </button>
              <button onClick={() => scrollToSection('services')} className="text-sm text-gray-700 hover:text-primary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('cases')} className="text-sm text-gray-700 hover:text-primary transition-colors">
                Кейсы
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-sm text-gray-700 hover:text-primary transition-colors">
                Контакты
              </button>
              <Button onClick={exportToPDF} disabled={isExporting} variant="outline" className="gap-2">
                <Icon name="Download" size={18} />
                {isExporting ? 'Создание PDF...' : 'Скачать PDF'}
              </Button>
              <Button onClick={() => scrollToSection('contact')}>
                Связаться
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 bg-gradient-to-br from-secondary via-secondary to-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
              Ваш надежный<br />PR-партнер для выхода в Россию
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
              Полный цикл услуг для продвижения бренда в регионах России
            </p>
            <Button 
              size="lg" 
              className="bg-white text-secondary hover:bg-blue-50 text-lg px-8 py-6"
              onClick={() => scrollToSection('contact')}
            >
              Обсудить проект
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50" id="about">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                  Российский рынок сегодня
                </h2>
                <div className="space-y-4 text-lg text-gray-700">
                  <p>
                    <Icon name="Check" className="inline text-primary mr-2" size={24} />
                    Более 80 миллионов активных потребителей
                  </p>
                  <p>
                    <Icon name="Check" className="inline text-primary mr-2" size={24} />
                    После 2022 года освободились ниши – реальные возможности для новых производителей
                  </p>
                  <p>
                    <Icon name="Check" className="inline text-primary mr-2" size={24} />
                    Жители готовы пробовать товары из дружественных стран
                  </p>
                  <p>
                    <Icon name="Check" className="inline text-primary mr-2" size={24} />
                    Продукция из СНГ, Азии и Ближнего Востока воспринимается как "свое, родное"
                  </p>
                </div>
              </div>
              <div className="bg-white p-12 rounded-3xl shadow-lg text-center">
                <div className="text-6xl font-bold text-primary mb-4">85%</div>
                <p className="text-xl text-gray-700">
                  ваших будущих клиентов живут и принимают решения за пределами Москвы
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-blue-600 text-white rounded-3xl p-12 mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
                Главный актив бизнеса – регионы страны!
              </h2>
              <p className="text-xl text-center mb-12 text-blue-100">
                У каждого города России – свой культурный код и свой покупатель!
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {cities.map((city, idx) => (
                  <Card key={idx} className="bg-white/10 backdrop-blur-sm border-white/20">
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-semibold mb-2">{city.name}</h3>
                      <p className="text-blue-100">{city.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="text-xl text-center mt-12">
                Мы знаем эти города и их жителей, потому что работаем среди них и для них – более 19 лет!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" id="services">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                Centre digital & media – ваш PR-мост в Россию
              </h2>
              <p className="text-xl text-gray-600">
                Мы оказываем полный цикл услуг для продвижения бренда в регионах
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => (
                <Card 
                  key={idx}
                  className={`cursor-pointer transition-all hover:shadow-xl border-2 ${
                    activeService === idx ? 'border-primary shadow-xl' : 'border-gray-100'
                  }`}
                  onClick={() => setActiveService(idx)}
                >
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon name={service.icon} className="text-primary" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-secondary">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-16 text-center">
              Почему мы?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advantages.map((adv, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={adv.icon} className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-secondary">{adv.title}</h3>
                  <p className="text-gray-600">{adv.text}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-2xl font-semibold text-secondary">
                Наша команда – более 100 специалистов из Ижевска, Москвы и Санкт-Петербурга!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" id="cases">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-16 text-center">
              Наши кейсы
            </h2>
            <div className="space-y-12">
              {cases.map((caseItem, idx) => (
                <Card key={idx} className="border-l-4 border-primary shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-secondary mb-6">{caseItem.title}</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-semibold text-primary uppercase mb-2">Задача</p>
                        <p className="text-gray-700">{caseItem.task}</p>
                      </div>
                      <Separator />
                      <div>
                        <p className="text-sm font-semibold text-primary uppercase mb-2">Решение</p>
                        <p className="text-gray-700">{caseItem.solution}</p>
                      </div>
                      <Separator />
                      <div>
                        <p className="text-sm font-semibold text-primary uppercase mb-2">Результат</p>
                        <p className="text-gray-700 font-medium">{caseItem.result}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-secondary to-blue-900 text-white" id="contact">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Давайте обсудим ваши задачи!
            </h2>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-12">
                <div className="space-y-6 text-left">
                  <div>
                    <p className="text-2xl font-semibold mb-2">Софья Самойлова</p>
                    <p className="text-blue-100 text-lg">Директор по экспорту</p>
                  </div>
                  <Separator className="bg-white/20" />
                  <div className="space-y-3">
                    <a href="mailto:s.samoylova@cdm.team" className="flex items-center gap-3 text-lg hover:text-primary transition-colors">
                      <Icon name="Mail" size={24} />
                      s.samoylova@cdm.team
                    </a>
                    <a href="tel:+79225256575" className="flex items-center gap-3 text-lg hover:text-primary transition-colors">
                      <Icon name="Phone" size={24} />
                      +7 922 525 65 75
                    </a>
                    <a href="https://centredigital.ru" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg hover:text-primary transition-colors">
                      <Icon name="Globe" size={24} />
                      centredigital.ru
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-blue-100">© 2025 Centre digital & media. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;