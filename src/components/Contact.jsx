import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Instagram,
  MessageSquareText,
} from 'lucide-react';

export default function Contact() {
  return (
    <section className='contact-cont'>
      <div className='contact-text'>
        <h1>Contact Me</h1>
        <p>
          Want to work together, have a question, or just want to connect? Reach
          out through any of the methods below — I'm always open to new
          conversations!
        </p>

        <ul className='contact-details'>
          <li>
            <Mail size={18} /> <span>sahejdhingra6@gmail.com</span>
          </li>
          <li>
            <Phone size={18} /> <span>+91 98786 14598</span>
          </li>
          <li>
            <MapPin size={18} /> <span>Goraya - 144409, Punjab</span>
          </li>
        </ul>

        <div className='contact-socials'>
          <a
            href='https://in.linkedin.com/in/prabhjot-singh-048840297'
            target='_blank'
            rel='noopener noreferrer'>
            <Linkedin size={24} />
          </a>
          <a
            href='https://github.com/sahej98'
            target='_blank'
            rel='noopener noreferrer'>
            <Github size={24} />
          </a>
          <a
            href='https://instagram.com/sahej_dhingra98'
            target='_blank'
            rel='noopener noreferrer'>
            <Instagram size={24} />
          </a>
          <a
            href='https://wa.me/919878614598'
            target='_blank'
            rel='noopener noreferrer'>
            <MessageSquareText size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
