
import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, Target, Zap, Shield, Clock } from 'lucide-react'

const About: React.FC = () => {
  const stats = [
    { icon: Target, label: 'Projetos Concluídos', value: '500+', color: 'text-blue-600' },
    { icon: Users, label: 'Clientes Satisfeitos', value: '200+', color: 'text-green-600' },
    { icon: Award, label: 'Anos de Experiência', value: '8+', color: 'text-purple-600' },
    { icon: Zap, label: 'Hectares Mapeados', value: '10K+', color: 'text-orange-600' }
  ]

  const values = [
    {
      icon: Target,
      title: 'Precisão',
      description: 'Utilizamos equipamentos de última geração para garantir a máxima precisão em todos os levantamentos.'
    },
    {
      icon: Zap,
      title: 'Agilidade',
      description: 'Nossos drones reduzem drasticamente o tempo de execução comparado aos métodos tradicionais.'
    },
    {
      icon: Shield,
      title: 'Segurança',
      description: 'Operações seguras com certificações ANAC e protocolos rigorosos de segurança.'
    },
    {
      icon: Clock,
      title: 'Pontualidade',
      description: 'Cumprimos rigorosamente os prazos estabelecidos, garantindo a continuidade dos seus projetos.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sobre a{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              AeroTopo
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Líderes em tecnologia de drones para mapeamento topográfico, 
            oferecendo soluções inovadoras e precisas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Revolucionando o Mapeamento Topográfico
            </h3>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Fundada em 2016, a AeroTopo nasceu com o objetivo de revolucionar 
                o setor de mapeamento topográfico através da tecnologia de drones. 
                Nossa equipe é formada por engenheiros especializados e pilotos 
                certificados pela ANAC.
              </p>
              
              <p>
                Utilizamos equipamentos de última geração, incluindo drones com 
                sensores RTK/PPK, câmeras de alta resolução e sensores multiespectrais, 
                garantindo a máxima precisão e qualidade em nossos levantamentos.
              </p>
              
              <p>
                Nossa missão é fornecer soluções rápidas, precisas e econômicas 
                para empresas de engenharia, arquitetura, agricultura e mineração, 
                contribuindo para o sucesso de seus projetos.
              </p>
            </div>

            <motion.div
              className="mt-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                Conheça Nossa Equipe
              </button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Equipe AeroTopo"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-3xl font-bold text-blue-600">8+</div>
              <div className="text-gray-600">Anos de Experiência</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nossos Valores
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
