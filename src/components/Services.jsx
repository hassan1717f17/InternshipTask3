import './Services.css'

const servicesData=[
    {
    title: 'GRAPHICS',
    description: 'Lorum ipsum dolor sit amet, consectetur adipiscing elit ...',
    tools: ['lorem ipsum','sed eiusmod','tempor incididunt', 'ut labore et', 'dolor magna', 'aliqua']
},
{
    title: 'WEB APP',
    description: 'Lorum ipsum dolor sit amet, consectetur adipiscing elit ...',
    tools: ['lorem ipsum','sed eiusmod','tempor incididunt', 'ut labore et', 'dolor magna', 'aliqua']
},
{
    title: 'VFX ART',
    description: 'Lorum ipsum dolor sit amet, consectetur adipiscing elit ...',
    tools: ['lorem ipsum','sed eiusmod','tempor incididunt', 'ut labore et', 'dolor magna', 'aliqua']
},
{
    title: 'GRAPHICS',
    description: 'Lorum ipsum dolor sit amet, consectetur adipiscing elit ...',
    tools: ['lorem ipsum','sed eiusmod','tempor incididunt', 'ut labore et', 'dolor magna', 'aliqua']
},
{
    title: 'WEB APP',
    description: 'Lorum ipsum dolor sit amet, consectetur adipiscing elit ...',
    tools: ['lorem ipsum','sed eiusmod','tempor incididunt', 'ut labore et', 'dolor magna', 'aliqua']
},
{
    title: 'VFX ART',
    description: 'Lorum ipsum dolor sit amet, consectetur adipiscing elit ...',
    tools: ['lorem ipsum','sed eiusmod','tempor incididunt', 'ut labore et', 'dolor magna', 'aliqua']
}
]

const Services=()=>{
    return(
        <section className="services">
            {servicesData.map((service, index)=>(
                <div className={`service-card service-${index}`} key={index}>
                    <h3>{service.title}</h3>
                    <div className='service-card-content'>
                        <p>{service.description}</p>
                        <h4>Tools Used</h4>
                        <ul>
                            {service.tools.map((tool, toolIndex)=>(
                                <li key={toolIndex}>{tool}</li>
                            ))}
                        </ul>
                        <button className="learn-more">Learn More<span className="arrow-icon">&#8594;</span></button>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Services