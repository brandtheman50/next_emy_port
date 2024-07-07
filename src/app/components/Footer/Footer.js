import './Footer.css';

export const Footer = () => {
    return (
        <div className="footer-cont">
            <div className="footer-info-cont">
                <div className="footer-desc">
                    <h2 className="get-in-touch">Get in Touch</h2>
                    <h4 className='subtitle'>Want to work together? Feel free to
                        reach out to me via email or add me on LinkedIn.</h4>
                </div>
                <div className="contact-info-cont">
                    <div className='contact-item'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M19.52 0H4.48C2 0 0 2 0 4.48V19.52C0 22 2 24 4.48 24H19.52C22 24 24 22 24 19.52V4.48C24 2 22 0 19.52 0ZM4.24 6.48H19.68C19.76 6.48 19.92 6.48 20 6.56L12.24 13.76C12.24 13.76 12.08 13.84 11.92 13.84C11.76 13.84 11.68 13.84 11.6 13.76L10.4 12.64L3.92 6.64C4 6.64 4.08 6.56 4.24 6.56V6.48ZM3.6 16.88V7.12L9.76 12.8L3.68 17.2C3.68 17.12 3.68 17.04 3.68 16.88H3.6ZM19.76 17.52H4.24L10.24 13.2L11.36 14.24C11.52 14.4 11.76 14.48 12 14.48C12.24 14.48 12.48 14.4 12.64 14.24L13.76 13.2L19.76 17.52ZM20.4 16.88C20.4 16.96 20.4 17.12 20.4 17.2L14.32 12.8L20.48 7.12V16.88H20.4Z" fill="#7D4DE3" />
                            </svg>
                        </div>
                        <a href="mailto:emi.caulder@gmail.com" className='contact-info'>emi.caulder@gmail.com</a>
                    </div>
                    <div className='contact-item'>
                        <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M19.52 0H4.48C2 0 0 2 0 4.48V19.52C0 22 2 24 4.48 24H19.52C22 24 24 22 24 19.52V4.48C24 2 22 0 19.52 0ZM8.64 18.08H5.92V9.36H8.64V18.08ZM7.28 8.64C6.48 8.64 5.92 8 5.92 7.36C5.92 6.72 6.48 5.92 7.28 5.92C8.08 5.92 8.64 6.56 8.64 7.28C8.64 8 8.16 8.64 7.28 8.64ZM18.08 18.08H15.36V13.44C15.36 12.4 14.96 11.52 14 11.52C13.04 11.52 12.96 12.16 12.72 12.56C12.72 12.8 12.72 12.96 12.72 13.2V18H10V12.24C10 11.2 10 10.32 10 9.6H12.4L12.56 10.72C12.88 10.16 13.68 9.36 15.12 9.36C16.56 9.36 18.08 10.48 18.08 12.96V17.92V18.08Z" fill="#7D4DE3" />
                        </svg></div>
                        <a href="http://www.linkedin.com/in/emi-caulder" className='contact-info'>http://www.linkedin.com/in/emi-caulder</a>
                    </div>
                </div>
            </div>
        </div>
    )
}