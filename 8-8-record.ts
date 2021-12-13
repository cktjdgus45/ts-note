{
    type PageInfo = {
        title: string;
    }
    type Page = 'home' | 'about' | 'contact';

    const nav: Record<Page, PageInfo> = { //Record 는 Page를 key , PageInfo를 value 로 설정.
        home: { title: 'Home' },
        about: { title: 'About' },
        contact: { title: 'Contact' }
    }
}