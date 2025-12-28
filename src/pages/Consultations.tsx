import { useEffect, useState } from 'react'
import { ChevronDown, ChevronUp, Clipboard, CheckCircle, FileSearch, Shield, Wrench, Recycle, AlertTriangle, Trash2 } from 'lucide-react'

const Consultations = () => {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    document.title = 'Consultations - Harvest Energy | NORM Management & Environmental Services'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Comprehensive NORM consultations including surveys, assessments, regulatory compliance, remediation solutions, and waste management services.')
    }
  }, [])

  const services = [
    {
      id: 'norm-surveys',
      title: 'NORM Surveys and Assessments',
      icon: Clipboard,
      content: [
        'Harvest Energy delivers comprehensive surveys and assessments to identify and evaluate the presence of Naturally Occurring Radioactive Materials (NORM) and Technologically Enhanced Naturally Occurring Radioactive Materials (TENORM) within operational environments.',
        'To safeguard workers, the public, and the environment, we employ advanced monitoring technologies and adhere to national regulations as well as the latest international safety standards.',
        'Our assessments are designed to ensure regulatory compliance, enhance operational safety, and build confidence in environmental and radiological management practices.',
      ],
      approach: [
        'Conducting site visits to evaluate NORM monitoring activities performed by the NORM Management contractor.',
        'Reviewing raw data collected by the contractor, assessing completeness, consistency, and compliance with established quality control standards.',
        'Analyzing collected data to identify trends, anomalies, and potential areas of concern.',
        'Reviewing NORM monitoring reports prepared by the contractor to ensure accuracy, comprehensiveness, and regulatory compliance.',
        'Issuing a final NORM Management Report and Certificate to the client upon successful completion of the review and audit process, certifying the accuracy and reliability of the monitoring results.',
      ]
    },
    {
      id: 'compliance',
      title: 'Regulatory Compliance Reviews and Audits',
      icon: CheckCircle,
      content: [
        'Harvest Energy is committed to ensuring that its clients remain fully compliant with the stringent regulations established by the Ministry of Environment and Climate Change (MoECC).',
        'We conduct comprehensive regulatory compliance reviews and audits to confirm that client operations adhere to the most current radiation safety and environmental standards.',
        'Our team systematically evaluates operational practices, procedures, and management systems to identify potential compliance gaps and deliver practical, actionable recommendations.',
        'By prioritizing both operational efficiency and regulatory conformity, we help our clients maintain full compliance, mitigate risks, and uphold the highest standards of safety and environmental stewardship.',
        'Harvest Energy further empowers its clients to achieve and sustain compliance with MoECC NORM management regulations, effectively minimizing radiological risks and safeguarding human health and the environment.',
      ]
    },
    {
      id: 'design',
      title: 'System Design Evaluation',
      icon: FileSearch,
      content: [
        'Harvest Energy applies comprehensive and robust methodologies to both new and ongoing projects, enabling thorough economic evaluation and the effective implementation of corrective actions.',
        'Our expert team conducts detailed analyses of systems, processes, and operational activities, delivering targeted recommendations and practical solutions designed to optimize performance while maintaining safety, efficiency, and full compliance with applicable radiological and environmental regulations.',
      ],
      approach: [
        'Identifying potential NORM sources within the facility and evaluating their radiological characteristics.',
        'Assessing material and personnel flow patterns to minimize NORM exposure and reduce the risk of cross-contamination.',
        'Reviewing ventilation systems to ensure sufficient air exchange and filtration for controlling airborne NORM.',
        'Determining shielding requirements necessary to protect personnel and the public from radiological exposure.',
        'Evaluating the design and functionality of decontamination facilities to ensure efficient removal of radioactive contaminants.',
        'Reviewing waste management and disposal plans to ensure the safe, compliant handling of radioactive waste.',
      ]
    },
    {
      id: 'remediation',
      title: 'Remediation and Decontamination Solutions',
      icon: Recycle,
      content: [
        'In situations where NORM and TENORM contamination is suspected, Harvest Energy provides comprehensive remediation and decontamination consultations to ensure the safe and effective restoration of affected environments.',
        'We deliver tailored, optimized solutions that address all decontamination needs, including the management of subsequent environmental discharge and waste across every phase of the project lifecycle.',
        'Our team leverages cost-efficient technological planning and implementation strategies to carry out these activities in strict compliance with applicable safety and regulatory standards.',
      ],
      approach: [
        'Conducting detailed site assessments to determine the extent, nature, and radiological characteristics of NORM contamination.',
        'Safely removing contaminated materials, including soil, water, and equipment.',
        'Employing a variety of decontamination techniques, including chemical cleaning, physical removal, and specialized treatments.',
        'Managing and disposing of radioactive waste in full accordance with regulatory requirements.',
        'Performing post-remediation monitoring to verify the effectiveness of cleanup efforts and ensure long-term compliance.',
      ]
    },
    {
      id: 'impact',
      title: 'Radiological Impact Assessment',
      icon: AlertTriangle,
      content: [
        'Harvest Energy delivers comprehensive radiological impact assessments to evaluate potential health risks associated with exposure to Naturally Occurring Radioactive Materials (NORM).',
      ],
      assessments: [
        'The potential for inhalation of airborne particles contaminated with NORM.',
        'Ingestion risks arising from contaminated food, water, or other environmental media.',
        'External exposure pathways, including contact with NORM-contaminated surfaces or materials.',
        'Identification of all radiological hazards pertinent to the facility or operational activity.',
        'Quantification of the likelihood and severity of each identified risk using established, structured risk assessment methodologies.',
        'Determination of the overall radiological risk profile, highlighting areas where additional controls or mitigation measures are warranted.',
        'Recommendation of engineering controls, such as shielding, ventilation, and containment, to reduce exposure to acceptable levels.',
        'Development of operational procedures and safe work practices to minimize exposure duration and manage radiological tasks under controlled conditions.',
        'Guidance on the selection and use of appropriate personal protective equipment (PPE) to ensure effective protection against radiation exposure.',
      ]
    },
    {
      id: 'waste',
      title: 'Waste Management',
      icon: Trash2,
      content: [
        'Harvest Energy provides expert waste management consultations to ensure the safe, compliant, and environmentally responsible handling and disposal of NORM-contaminated waste.',
        'Our team collaborates closely with clients to design and implement tailored waste management strategies that minimize environmental impact while protecting public health.',
      ],
      approach: [
        'Identification and characterization of the radiological properties of NORM-contaminated waste, followed by appropriate classification.',
        'Segregation of waste streams to facilitate safe and regulatory-compliant disposal.',
        'Packaging and labeling of waste in strict accordance with applicable regulations.',
        'Coordination of secure transportation to authorized disposal or storage facilities.',
        'Collaboration with licensed waste disposal operators to ensure proper handling and final disposition.',
        'Maintenance of comprehensive records documenting waste generation, transportation, and disposal activities.',
      ]
    }
  ]

  const toggleSection = (id: string) => {
    setActiveSection(activeSection === id ? '' : id)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="hero min-h-[60vh] bg-gradient-to-br from-slate-900 to-emerald-900 text-white">
        <div className="absolute inset-0 bg-black/40" />
        <div className="hero-content">
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6 animate-slide-up">
            Consultations
          </h1>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto animate-slide-up animation-delay-200">
            Comprehensive NORM Management and Environmental Protection Services
          </p>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-secondary leading-relaxed mb-6">
              Radiological protection is a core priority at Harvest Energy. We provide expert guidance in the design and implementation of customized radiation safety programs that are fully aligned with operational requirements and comply with all applicable environmental and regulatory standards.
            </p>
            <p className="text-lg text-secondary leading-relaxed">
              Through our extensive expertise and steadfast commitment to safety and regulatory compliance, Harvest Energy ensures that all NORM-contaminated waste is managed responsibly, safeguarding both human health and the environment.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-surface">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="section-title text-center mb-16">Our Services</h2>
            
            <div className="space-y-4">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                >
                  {/* Service Header */}
                  <button
                    onClick={() => toggleSection(service.id)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <service.icon className="w-8 h-8 text-emerald-600" />
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                    </div>
                    {activeSection === service.id ? (
                      <ChevronUp className="w-6 h-6 text-slate-600" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-slate-600" />
                    )}
                  </button>

                  {/* Service Content */}
                  {activeSection === service.id && (
                    <div className="px-6 pb-6 animate-slide-down">
                      <div className="border-t pt-6">
                        {service.content.map((paragraph, index) => (
                          <p key={index} className="text-secondary mb-4">
                            {paragraph}
                          </p>
                        ))}
                        
                        {service.approach && (
                          <div className="mt-6">
                            <h4 className="text-lg font-bold mb-4">Our approach involves a rigorous review and audit process, which includes:</h4>
                            <ul className="space-y-3">
                              {service.approach.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                  <Shield className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                                  <span className="text-secondary">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {service.assessments && (
                          <div className="mt-6">
                            <h4 className="text-lg font-bold mb-4">Our assessments encompass a thorough evaluation of multiple exposure pathways and risk factors, including:</h4>
                            <ul className="space-y-3">
                              {service.assessments.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                                  <span className="text-secondary">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {service.id === 'remediation' && (
                          <p className="mt-6 text-secondary font-semibold">
                            Through our unwavering commitment to safety, technical excellence, and regulatory compliance, Harvest Energy delivers successful remediation and decontamination projects that protect human health and the environment.
                          </p>
                        )}

                        {service.id === 'design' && (
                          <p className="mt-6 text-secondary font-semibold">
                            By partnering with Harvest Energy, clients can operate with confidence, knowing that their NORM storage areas and decontamination facilities meet the highest standards of safety, performance, and regulatory compliance.
                          </p>
                        )}

                        {service.id === 'waste' && (
                          <p className="mt-6 text-secondary font-semibold">
                            Through our extensive expertise and steadfast commitment to safety and regulatory compliance, Harvest Energy ensures that all NORM-contaminated waste is managed responsibly, safeguarding both human health and the environment.
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Consultations