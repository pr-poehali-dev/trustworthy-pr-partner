import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

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
      description: 'Видео и аудио: от Reels до имиджевых фильмов'
    },
    {
      icon: 'TrendingUp',
      title: 'Медиазакупки',
      description: 'ТВ, радио, digital, наружка'
    },
    {
      icon: 'BarChart',
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
    { icon: 'Award', title: '19 лет опыта', text: 'Маркетинг, контент, PR и GR в регионах РФ' },
    { icon: 'Users', title: 'Команда 100+', text: 'Копирайтеры, дизайнеры, SMM, продакшн' },
    { icon: 'Radio', title: 'Свои медиа', text: 'Радио, онлайн-СМИ, миллионная аудитория' },
    { icon: 'Package', title: 'Единое окно', text: 'От стратегии до отчётности' },
    { icon: 'PieChart', title: 'Прозрачность', text: 'Регулярная отчётность по KPI' },
    { icon: 'Zap', title: 'Гибкость', text: 'Быстрее федеральных агентств' }
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

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#6B2C2C] to-[#541F1F] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="font-semibold text-lg">Centre digital & media</span>
            </div>
            <Button onClick={exportToPDF} disabled={isExporting} className="gap-2 bg-gradient-to-r from-[#6B2C2C] to-[#541F1F] hover:from-[#541F1F] hover:to-[#6B2C2C]">
              <Icon name="Download" size={18} />
              {isExporting ? 'Создание PDF...' : 'Скачать презентацию'}
            </Button>
          </div>
        </div>
      </nav>

      <div className="pt-20 space-y-8 pb-8" id="pdf-content">
        <div className="slide min-h-[600px] bg-gradient-to-br from-[#1A1A1A] via-[#541F1F] to-[#6B2C2C] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
          <div className="text-center text-white z-10 px-8">
            <h1 className="text-7xl font-bold mb-6 drop-shadow-lg">Ваш надежный<br />PR-партнер</h1>
            <p className="text-3xl mb-8 text-white/90">для выхода в Россию</p>
            <div className="inline-block bg-white/20 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/30">
              <p className="text-xl">Полный цикл услуг для продвижения бренда в регионах</p>
            </div>
          </div>
        </div>

        <div className="slide min-h-[600px] bg-gradient-to-br from-[#FAF8F5] to-[#f0ebe3] flex items-center">
          <div className="container mx-auto px-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl font-bold text-gray-900 mb-8">Российский рынок сегодня</h2>
                <div className="space-y-4">
                  {[
                    '80+ млн активных потребителей',
                    'Свободные ниши после 2022',
                    'Интерес к дружественным странам',
                    'СНГ и Азия воспринимаются как "свои"'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                      <div className="w-3 h-3 bg-gradient-to-r from-[#6B2C2C] to-[#2F5745] rounded-full"></div>
                      <p className="text-xl text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#6B2C2C] to-[#541F1F] p-12 rounded-3xl text-white shadow-2xl">
                <div className="text-8xl font-bold mb-4">85%</div>
                <p className="text-2xl leading-relaxed">ваших клиентов живут за пределами Москвы</p>
              </div>
            </div>
          </div>
        </div>

        <div className="slide min-h-[600px] bg-gradient-to-br from-[#2F5745] to-[#1A1A1A] flex items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
          <div className="container mx-auto px-12 z-10">
            <h2 className="text-6xl font-bold text-white text-center mb-12">Главный актив – регионы!</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {cities.slice(0, 4).map((city, i) => (
                <Card key={i} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-white mb-2">{city.name}</div>
                    <p className="text-white/80 text-sm">{city.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              {cities.slice(4).map((city, i) => (
                <Card key={i} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-white mb-2">{city.name}</div>
                    <p className="text-white/80 text-sm">{city.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="slide min-h-[600px] bg-white flex items-center">
          <div className="container mx-auto px-12">
            <h2 className="text-6xl font-bold text-center mb-16 text-gray-900">Что мы делаем</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <Card key={i} className="hover:shadow-xl transition-all border-2 border-[#6B2C2C]/10 hover:border-[#6B2C2C]/30">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#6B2C2C] to-[#2F5745] rounded-2xl flex items-center justify-center mb-6">
                      <Icon name={service.icon as any} className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="slide min-h-[600px] bg-gradient-to-br from-[#1A1A1A] to-[#2F5745] flex items-center">
          <div className="container mx-auto px-12">
            <h2 className="text-6xl font-bold text-white text-center mb-16">Почему Centre?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((adv, i) => (
                <Card key={i} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#6B2C2C] to-[#FAF8F5] rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon name={adv.icon as any} className="text-white" size={36} />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-3">{adv.title}</h3>
                    <p className="text-white/80 text-lg">{adv.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="slide min-h-[600px] bg-white flex items-center">
          <div className="container mx-auto px-12">
            <h2 className="text-6xl font-bold text-center mb-16 text-gray-900">Кейсы</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cases.slice(0, 3).map((caseItem, i) => (
                <Card key={i} className="bg-gradient-to-br from-[#FAF8F5] to-white border-2 border-[#6B2C2C]/20 hover:shadow-xl transition-all">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-[#6B2C2C]">{caseItem.title}</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Задача</p>
                        <p className="text-gray-700">{caseItem.task}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Результат</p>
                        <p className="font-semibold text-[#2F5745]">{caseItem.result}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
              {cases.slice(3).map((caseItem, i) => (
                <Card key={i} className="bg-gradient-to-br from-[#FAF8F5] to-white border-2 border-[#6B2C2C]/20 hover:shadow-xl transition-all">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-[#6B2C2C]">{caseItem.title}</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Задача</p>
                        <p className="text-gray-700">{caseItem.task}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Результат</p>
                        <p className="font-semibold text-[#2F5745]">{caseItem.result}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="slide min-h-[600px] bg-gradient-to-br from-[#6B2C2C] via-[#541F1F] to-[#1A1A1A] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
          <div className="text-center text-white z-10 px-8 max-w-4xl mx-auto">
            <h2 className="text-6xl font-bold mb-12">Давайте работать!</h2>
            <div className="bg-white/10 backdrop-blur-md p-12 rounded-3xl border border-white/20">
              <div className="space-y-6">
                <div className="flex items-center justify-center gap-3 text-2xl">
                  <Icon name="Mail" size={28} />
                  <a href="mailto:info@centredigital.ru" className="hover:text-[#FAF8F5] transition-colors">
                    info@centredigital.ru
                  </a>
                </div>
                <div className="flex items-center justify-center gap-3 text-2xl">
                  <Icon name="Phone" size={28} />
                  <a href="tel:+73412773000" className="hover:text-[#FAF8F5] transition-colors">
                    +7 (3412) 77-30-00
                  </a>
                </div>
                <div className="flex items-center justify-center gap-3 text-2xl">
                  <Icon name="MapPin" size={28} />
                  <span>Ижевск, Удмуртия</span>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-white/20">
                <p className="text-xl text-white/90 leading-relaxed">
                  Обсудим вашу задачу и подберём комплекс услуг для эффективного выхода на российский рынок
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
