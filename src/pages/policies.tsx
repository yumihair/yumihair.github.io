import Title from '../components/Title';
import './policies.css'

function Policies() {
  return (
    <div style={{ minHeight: '110vh', position: 'relative' }}>
      <Title name="Policies" cursiveName="questions" />
      
      <div className='policies_container' style={{color: 'white', marginBottom: '50px'}}>
        <div className='question'>What is your cancellation policy?</div>
        <div className='description'>We kindly ask for at least 24 hours notice for any cancellations or rescheduling. Cancellations made with less than 24 hours' notice may be subject to a 50% fee of the scheduled service. No-shows will be charged the full service amount.</div>

        <div className='question'>What happens if I&apos;m late?</div>
        <div className='description'>If you arrive more than 15 minutes late, we may need to adjust or reschedule your appointment to avoid impacting other clients. Please call or message ahead if you're running behind.</div>

        <div className='question'>How do you keep things clean?</div>
        <div className='description'>Your health and comfort are our top priority. All tools and surfaces are sanitized between every client, and we follow state board sanitation guidelines to the highest standard.</div>

        <div className='question'>Do you use eco-friendly products?</div>
        <div className='description'>Your beauty routine should be as kind to the planet as it is to your hair. While I do use and offer cruelty-free, eco-conscious brands in our service, my top priority is creating the best look and haircare routine that's uniquely crafted for you.
        </div>

        <div className='question'>What if I&apos;m not happy with my service?</div>
        <div className='description'>Client satisfaction is incredibly important. If you&apos;re not completely satisfied with your service, please reach out within 5 days so we can make it right with a complimentary adjustment, if needed.</div>

        <div className='question'>How far in advance should I book?</div>
        <div className='description'>Appointments typically book 2&mdash;4 weeks in advance, especially for weekends. Last-minute appointments may be available — feel free to check the  
            <a href="https://yummi-hair.square.site/"  
                target="_blank"
                rel="noopener noreferrer"
                style={{color: 'white', fontWeight: '700'}}> online scheduler</a>.</div>
      </div>


      </div>
    );
}

export default Policies;
