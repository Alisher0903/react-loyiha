import { Col, Container, NavItem, NavLink, Row } from "reactstrap";
import NavbarInfo from "../navbar/NavbarInfo";
import NavbarMenu from "../navbar/NavbarMenu";
import "./styleBusiness.css"
import { Link } from "react-router-dom";

function ForBusiness() {

    window.addEventListener('scroll', () => {
        const backToTopBtn = document.getElementById('backToTopBtn');
        if (window.scrollY > 150) {
            backToTopBtn.classList.add('show');
            backToTopBtn.classList.remove('hide');

        } else {
            backToTopBtn.classList.remove('show');
            backToTopBtn.classList.add('hide');

        }
    });

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div>
            <NavbarInfo />
            <NavbarMenu />

            {/* scroll buluvchi btn */}
            <button id="backToTopBtn" onClick={scrollToTop}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 256 256">
                    <g transform="rotate(90 128 128)">
                        <path fill="white" d="M228 128a12 12 0 0 1-12 12H69l51.52 51.51a12 12 0 0 1-17 17l-72-72a12 12 0 0 1 0-17l72-72a12 12 0 0 1 17 17L69 116h147a12 12 0 0 1 12 12Z" />
                    </g>
                </svg>
            </button>

            {/* navbar */}
            <nav className="nav-business">
                <ul>
                    <NavItem><NavLink href="#intro">Решения для бизнеса</NavLink></NavItem>
                    <NavItem><NavLink href="#reasons">Причины использования</NavLink></NavItem>
                    <NavItem><NavLink href="#options">Варианты решений</NavLink></NavItem>
                    <NavItem><NavLink href="#types">Виды подключений</NavLink></NavItem>
                    <NavItem><NavLink href="#stages">Этапы реализации</NavLink></NavItem>
                    <NavItem><NavLink href="#feedback">Обратная связь</NavLink></NavItem>
                </ul>
            </nav>

            {/* intro section */}
            <section id="intro">
                <div className="section-intro">
                    <img src="https://solara.uz/assets/images/93/93cebe_Solar-Panels-For-Business.jpg" alt="img" />
                    <Container className="text-center">
                        <div className="section-intro__info">
                            <h1>Комплексные решения для бизнеса в сфере солнечной энергетики</h1>
                            <p>Солнечная электростанция – надежная альтернатива традиционным источникам энергоснабжения, позволяющая экономить на электроэнергии.</p>
                            <Link to="/">Главная</Link>
                            <span className="ms-3 me-3">/</span>
                            <span>Для бизнеса</span>
                        </div>
                        <div className="section-intro__icons">
                            <div>
                                <img src="https://solara.uz/images/2472_i9FkXWszVFjJhlMTmmjlz1LHbAWkawVm.svg" alt="img1" />
                                <img src="https://solara.uz/images/2473_fcAoKI8ap9D1EpDnrXizYJK_2uO-LIUv.svg" alt="img2" />
                                <img src="https://solara.uz/images/2474_MV94wBlmXJqQczUbaor-_PnnHWm-yvZx.svg" alt="img3" />
                                <img src="https://solara.uz/images/2475_7SKYiqApAN74e5lKZNzCtxahxm7_DqjV.svg" alt="img4" />
                                <img src="https://solara.uz/images/2476_iCjaJmK-UoNNzfs_Nv_LtDn9hP133eot.svg" alt="img5" />
                                <img src="https://solara.uz/images/2477_0xy3wGJ8GGQHDdGlakniUbQBPPoS2Dgw.svg" alt="img6" />
                                <img src="https://solara.uz/images/2478_Qc_sQE2XZ2HsahCYRg6qwgfLgfX7QzjR.svg" alt="img7" />
                            </div>
                        </div>
                    </Container>
                </div>
            </section>

            {/* reasons section */}
            <section id="reasons">
                <Row className="w-100">
                    <Col className="col-2"></Col>
                    <Col className="col-10">
                        <Container className="ps-5 pe-5">
                            <div className="section-reasons text-center">
                                <div></div>
                                <span>Для бизнеса</span>
                                <h2>Причины использовать солнечную электростанцию</h2>
                                <p>Реалии таковы, что цены на электроэнергию постоянно поднимаются. Предприниматели вынуждены
                                    искать пути оптимизации расходов, чтобы не прогореть в условиях сильной конкурентной среды.
                                    Производственные предприятия имеют возможности сэкономить путем следования программам по повышению
                                    энергоэффективности или принципам бережного производства, позволяющим не только сохранить ресурсы,
                                    но и избавиться от негативного воздействия на природу.</p>
                                <p>Статистка показывает, что пиковая активность потребления электроэнергии на предприятиях выпадает на день,
                                    а это значит, что солнечные панели являются идеальным решением для бизнеса. Дополнительное преимущество
                                    солнечных аккумуляторов в том, что с их помощью можно создать надежный резерв энергии для систем,
                                    в которых особенно ценится бесперебойное функционирование.</p>
                            </div>
                        </Container>
                    </Col>
                </Row>
            </section>

            {/* options section */}
            <section id="options">options</section>

            {/* types section */}
            <section id="types">types</section>

            {/* stages section */}
            <section id="stages">
                <Row className="w-100">
                    <Col className="col-2"></Col>
                    <Col className="col-10">
                        <Container className="section-stages px-3">
                            <h3>Этапы реализации</h3>
                            <p>Долгосрочный договор поставки электроэнергии для промышленных предприятий.
                                Отсутствие инвестиций со стороны заказчика на этапе строительства солнечной генерации.</p>
                            <Row className="w-100">
                                <Col className="col-3">1</Col>
                                <Col className="col-3">2</Col>
                                <Col className="col-3">3</Col>
                                <Col className="col-3">4</Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </section>

            {/* feedback section */}
            <section id="feedback">feedback</section>

        </div>
    );
}
export default ForBusiness;