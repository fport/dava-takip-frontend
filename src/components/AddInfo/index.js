import { useState } from 'react';
import axios from 'axios';
import './style.css';
import { Container, Row, Col, Form } from 'react-bootstrap';

const AddInfo = () => {
    const [dava, setDava] = useState({
        active: false,
        name: '',
        designnumber: '',
        designname: '',
        productlink: '',
        vergino: '',
        adress: '',
        ticarisicil: '',
        telefonno: '',
        email: '',
        domainregistrantaddress: '',
        tpekayitlimarka: '',
        notlar: '',
        calinantasarim: '',
        sergilendigiyer: '',
        tahminisatis: '',
        social: [],
    });

    const [selectedDropdown, setSelectedDropDown] = useState({});

    const onAddBtnClick = () => {
        const newSocial = dava.social;
        newSocial.push({
            id: selectedDropdown.value,
            title: selectedDropdown.title,
            input: '',
            checkBox1: false,
            checkBox2: false,
        });
        setDava({
            ...dava,
            social: newSocial,
        });
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setDava((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleOnChange = (e) => {
        let reverse = !dava.active;
        setDava((prevState) => ({
            ...prevState,
            active: reverse,
        }));
    };

    const handleOnChangex = (e) => {
        let reverse = !dava.social;
        setDava((prevState) => ({
            ...prevState,
            social: reverse,
        }));
    };
    const addDava = async (e) => {
        e.preventDefault();

        await axios.post(`${process.env.REACT_APP_API_URL}/api/dava`, {
            active: dava.active,
            name: dava.name,
            designnumber: dava.designnumber,
            designname: dava.designname,
            productlink: dava.productlink,
            vergino: dava.vergino,
            adress: dava.adress,
            ticarisicil: dava.ticarisicil,
            telefonno: dava.telefonno,
            email: dava.email,
            domainregistrantaddress: dava.domainregistrantaddress,
            tpekayitlimarka: dava.tpekayitlimarka,
            notlar: dava.notlar,
            calinantasarim: dava.calinantasarim,
            sergilendigiyer: dava.sergilendigiyer,
            tahminisatis: dava.tahminisatis,
        });

        setDava({
            active: false,
            name: '',
            designnumber: '',
            designname: '',
            productlink: '',
            vergino: '',
            adress: '',
            ticarisicil: '',
            telefonno: '',
            email: '',
            domainregistrantaddress: '',
            tpekayitlimarka: '',
            notlar: '',
            calinantasarim: '',
            sergilendigiyer: '',
            tahminisatis: '',
        });
    };

    return (
        <>
            <div className='sayfa-bilgilendirme'>
                <h1>Dava Ekleme</h1>
            </div>
            <div className='containerx'>
                <div className='row'>
                    <Container>
                        <Row>
                            <Col>
                                <div className='grup'>
                                    <div className='form-group'>
                                        <div>
                                            <select id='cars'>
                                                <option value='Volvo'>Volvo</option>
                                                <option value='Saab'>Saab</option>
                                                <option value='Opel'>Opel</option>
                                                <option value='Audi'>Audi</option>
                                            </select>
                                            <button onClick={onAddBtnClick}>Ekle</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='grup'>
                                    <div className='form-group'>
                                        <label htmlFor='active'>Dava Aktif mi?</label>
                                        <input
                                            type='checkbox'
                                            id='vehicle1'
                                            name='active'
                                            checked={dava.active}
                                            onChange={handleOnChange}
                                        />
                                        <Form.Check
                                            type='switch'
                                            id='custom-switch'
                                            checked={dava.social}
                                            label='Check this switch'
                                            onChange={handleOnChangex}
                                        />
                                    </div>
                                </div>
                                <div className='grup'>
                                    <div className='form-group'>
                                        <label htmlFor='name'>Hırsızın Ismi / Markası</label>
                                        <input
                                            className='input-box'
                                            type='text'
                                            placeholder='İsim Soyisim veya Markanin ismini giriniz.'
                                            onChange={handleChange}
                                            name='name'
                                            value={dava.name}
                                        />
                                    </div>
                                </div>

                                <div className='grup'>
                                    <div className='form-group'>
                                        <label htmlFor='adress'>Calinan Tasarım</label>
                                        <input
                                            className='input-box'
                                            type='text'
                                            placeholder='calinantasarim'
                                            name='calinantasarim'
                                            onChange={handleChange}
                                            value={dava.calinantasarim}
                                        />
                                        <label htmlFor='adress'>sergilendigiyer</label>
                                        <input
                                            className='input-box'
                                            type='text'
                                            placeholder='sergilendigiyer'
                                            name='sergilendigiyer'
                                            onChange={handleChange}
                                            value={dava.sergilendigiyer}
                                        />
                                        <label htmlFor='adress'>tahminisatis</label>
                                        <input
                                            className='input-box'
                                            type='text'
                                            placeholder='tahminisatis'
                                            name='tahminisatis'
                                            onChange={handleChange}
                                            value={dava.tahminisatis}
                                        />
                                    </div>
                                </div>
                                <div className='grup'>
                                    <div className='form-group'>
                                        <label htmlFor='active'>Sosyal Medya</label>
                                        <div>
                                            <select
                                                onChange={(e) => {
                                                    setSelectedDropDown({
                                                        value: e.target.value,
                                                        title: e.target[e.target.value].innerText,
                                                    });
                                                }}>
                                                <option value='0'>Facebook</option>
                                                <option value='1'>Instagram</option>
                                                <option value='2'>Amazon</option>
                                            </select>
                                            <button onClick={onAddBtnClick}>Ekle</button>
                                        </div>

                                        {dava.social.map((media) => (
                                            <div key={media.id}>
                                                <label htmlFor='adress'>{media.title}</label>
                                                <input
                                                    className='input-box'
                                                    type='text'
                                                    placeholder='facebook'
                                                    name='facebook'
                                                    onChange={(e) => {
                                                        media.input = e.target.value;
                                                    }}
                                                />
                                                <input
                                                    type='checkbox'
                                                    id='vehicle1'
                                                    name='checkbox1'
                                                    onChange={(e) =>
                                                        (media.checkBox1 = !media.checkBox1)
                                                    }
                                                />
                                                <input
                                                    type='checkbox'
                                                    id='vehicle1'
                                                    name='checkbox2'
                                                    onChange={(e) =>
                                                        (media.checkBox2 = !media.checkBox2)
                                                    }
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className='grup'>
                                    <div className='form-group'>
                                        <label htmlFor='email'>Design Number</label>
                                        <input
                                            className='input-box'
                                            id='designnumber'
                                            placeholder='design number'
                                            onChange={handleChange}
                                            name='designnumber'
                                            value={dava.designnumber}
                                        />
                                        <label htmlFor='designname'>Design name</label>
                                        <input
                                            className='input-box'
                                            type='text'
                                            placeholder='design name '
                                            name='designname'
                                            onChange={handleChange}
                                            value={dava.designname}
                                        />
                                        <label htmlFor='productlink'>Product link</label>
                                        <input
                                            className='input-box'
                                            type='text'
                                            id='productlink'
                                            placeholder='productlink'
                                            name='productlink'
                                            onChange={handleChange}
                                            value={dava.productlink}
                                        />
                                    </div>
                                </div>
                                <div className='grup'>
                                    <div className='form-group'>
                                        <label htmlFor='vergino'>Vergi no</label>
                                        <input
                                            className='input-box'
                                            type='text'
                                            id='vergi'
                                            placeholder='Vergi no'
                                            name='vergino'
                                            onChange={handleChange}
                                            value={dava.vergino}
                                        />
                                        <label htmlFor='adress'>Adress</label>
                                        <input
                                            className='input-box'
                                            type='text'
                                            placeholder='Adress'
                                            name='adress'
                                            onChange={handleChange}
                                            value={dava.adress}
                                        />
                                        <label htmlFor='adress'>Ticari Sicil No</label>
                                        <input
                                            className='input-box'
                                            type='text'
                                            placeholder='Ticari Sicil No'
                                            name='ticarisicil'
                                            onChange={handleChange}
                                            value={dava.ticarisicil}
                                        />
                                        <label htmlFor='adress'>Telefon No</label>
                                        <input
                                            className='input-box'
                                            type='text'
                                            placeholder='Telefon No'
                                            name='telefonno'
                                            onChange={handleChange}
                                            value={dava.telefonno}
                                        />
                                        <label htmlFor='adress'>Email</label>
                                        <input
                                            className='input-box'
                                            type='text'
                                            placeholder='email'
                                            name='email'
                                            onChange={handleChange}
                                            value={dava.email}
                                        />
                                        <label htmlFor='adress'>Domain Registrant Address</label>
                                        <input
                                            className='input-box'
                                            type='text'
                                            placeholder='domainregistrantaddress'
                                            name='domainregistrantaddress'
                                            onChange={handleChange}
                                            value={dava.domainregistrantaddress}
                                        />
                                        <label htmlFor='adress'>TPE Kayıtlı Marka</label>
                                        <input
                                            className='input-box'
                                            type='text'
                                            placeholder='tpekayitlimarka'
                                            name='tpekayitlimarka'
                                            onChange={handleChange}
                                            value={dava.tpekayitlimarka}
                                        />
                                        <label htmlFor='adress'>notlar</label>
                                        <input
                                            className='input-box'
                                            type='text'
                                            placeholder='notlar'
                                            name='notlar'
                                            onChange={handleChange}
                                            value={dava.notlar}
                                        />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className='dava-but'>
                    <button type='submit' className='dava-buton' onClick={addDava}>
                        Submit
                    </button>
                </div>
            </div>
        </>
    );
};

export default AddInfo;
