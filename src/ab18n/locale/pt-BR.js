const dictionary = {
  initial: {
    title: 'ESTABLISHMENTS',
  },
  notFound: {
    title: '404',
    status: '404',
    subTitle: 'Página não encontrada.',
  },
  login: {
    title: 'Login',
    email: 'E-mail',
    password: 'Senha',
    enter: 'Entrar',
    register: 'Cadastre-se!',
    required: 'Preencha o campo.',
  },
  register: {
    title: 'Cadastrar',
    name: 'Nome',
    email: 'E-mail',
    password: 'Senha',
    access: 'Cadastrar',
    required: 'Campo obrigatório.',
    fail: 'Não foi possível realizar cadastro.',
    success: 'Cadastro realizado com sucesso.',
  },
  establishment: {
    title: 'Estabelecimentos',
    fail: 'Não foi possível carregar estabelecimentos.',
    table: {
      id: '#',
      name: 'Nome',
      address: 'Endereço',
      neighborhood: 'Bairro',
      city: 'Cidade',
      state: 'Estado',
      actions: 'Ações',
    },
    form: {
      title: 'Cadastrar Estabelecimento',
      name: 'Nome',
      address: 'Endereço',
      neighborhood: 'Bairro',
      city: 'Cidade',
      state: 'Estado',
      register: 'Cadastrar',
      required: 'Campo obrigatório.',
    }
  },
}

const config = {
  locale: 'pt-BR',
  country: 'BR',
  currency: 'BRL',
  dictionary,
}

export default config
