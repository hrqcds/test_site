
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, MapPin, Calendar, Users } from 'lucide-react'

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'topografia', label: 'Topografia' },
    { id: 'inspecao', label: 'Inspeção' },
    { id: 'agricultura', label: 'Agricultura' },
    { id: 'mineracao', label: 'Mineração' }
  ]

  const projects = [
    {
      id: 1,
      title: 'Levantamento Complexo Industrial',
      category: 'topografia',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Mapeamento completo de complexo industrial de 50 hectares com precisão centimétrica.',
      location: 'São Paulo, SP',
      duration: '15 dias',
      team: '4 especialistas',
      area: '50 hectares',
      highlights: ['Modelo 3D detalhado', 'Ortomosaico 2cm/pixel', 'Curvas de nível 0.5m']
    },
    {
      id: 2,
      title: 'Inspeção de Ponte Rodoviária',
      category: 'inspecao',
      image: 'https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Inspeção detalhada de estrutura de ponte com identificação de patologias.',
      location: 'Rio de Janeiro, RJ',
      duration: '3 dias',
      team: '2 especialistas',
      area: '1.2 km',
      highlights: ['Análise estrutural', 'Relatório técnico', 'Segurança total']
    },
    {
      id: 3,
      title: 'Monitoramento Agrícola',
      category: 'agricultura',
      image: 'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Análise multispectral para otimização de produtividade agrícola.',
      location: 'Mato Grosso, MT',
      duration: '7 dias',
      team: '3 especialistas',
      area: '200 hectares',
      highlights: ['Índice NDVI', 'Mapa de produtividade', 'Agricultura de precisão']
    },
    {
      id: 4,
      title: 'Cubagem de Mineração',
      category: 'mineracao',
      image: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Cálculo preciso de volumes para controle de produção em mina a céu aberto.',
      location: 'Minas Gerais, MG',
      duration: '10 dias',
      team: '5 especialistas',
      area: '75 hectares',
      highlights: ['Cubagem precisa', 'Controle de estoque', 'Relatórios mensais']
    },
    {
      id: 5,
      title: 'Georreferenciamento Rural',
      category: 'topografia',
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Certificação INCRA para propriedade rural com demarcação de limites.',
      location: 'Goiás, GO',
      duration: '12 dias',
      team: '3 especialistas',
      area: '300 hectares',
      highlights: ['Certificação INCRA', 'Memorial descritivo', 'Marcos geodésicos']
    },
    {
      id: 6,
      title: 'Inspeção de Torres de Transmissão',
      category: 'inspecao',
      image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Inspeção preventiva de linha de transmissão de energia elétrica.',
      location: 'Bahia, BA',
      duration: '20 dias',
      team: '4 especialistas',
      area: '150 km',
      highlights: ['Inspeção termográfica', 'Relatório de manutenção', 'Zero interrupção']
    }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="projects" className="py-20 bg-white">
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
            Nossos{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Projetos
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos projetos que realizamos com excelência e precisão
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <motion.div
                    className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                      {project.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                      {project.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="w-4 h-4 mr-2 text-blue-500" />
                      {project.team}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <div className="w-4 h-4 mr-2 bg-blue-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      {project.area}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-1">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-600 mb-6">
            Quer ver seu projeto aqui? Entre em contato conosco!
          </p>
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Iniciar Projeto
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
