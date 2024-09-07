import propTypes from 'prop-types'

const SkillCard = ({image_url, title, secondTitle, skills}) => {
  return (
    <div className=''>
      <div className='flex lg:flex-row flex-col-reverse bg-slate-200 rounded-lg'>
        <div className='lg:w-1/2'>
        <div className='flex flex-col gap-5  p-10'>
                <p className='font-bold text-lg'>
                    {title}
                </p>
                <div>   
                    <p className='font-bold opacity-80'>
                        {secondTitle}
                    </p>
                    <ul className='p-4 opacity-75'>
                        {skills.map((skill)=>
                            <li key={skill}>{skill}</li>
                        )}
                    </ul>
                </div>
        </div>
        </div>
        <div className='lg:w-1/2'>
            <img src={image_url} className='rounded-xl lg:h-full w-full' />
        </div>
        </div>
    </div>
  )
}

SkillCard.propTypes = {
    image_url: propTypes.string.isRequired,
    title: propTypes.string,
    secondTitle:propTypes.string,
    skills: propTypes.array
}
export default SkillCard 
