import Hapi from '@hapi/hapi'

import questionRoutes from '../routes/questions.routes'

const questionsPlugin = {
    name: 'app/questionsRout',
    register: async (server: Hapi.Server) => {
        server.route(questionRoutes)
    },
}

export default questionsPlugin
