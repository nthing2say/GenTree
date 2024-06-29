# Proyecto Web3 con React, Thirdweb, Base y Fleek

## Introducción

Este proyecto es una aplicación descentralizada (dApp) desarrollada con React, que utiliza Thirdweb para la integración de contratos inteligentes, Base como red blockchain y Fleek para el hosting y despliegue. La dApp permite a los usuarios interactuar con la blockchain de manera fácil y segura.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Uso](#uso)
- [Características](#características)
- [Dependencias](#dependencias)
- [Configuración](#configuración)
- [Contribuidores](#contribuidores)
- [Licencia](#licencia)

## Instalación

1. Clona el repositorio:
    ```sh
    git clone https://github.com/tu-usuario/tu-repositorio.git
    cd tu-repositorio
    ```

2. Instala las dependencias:
    ```sh
    npm install
    ```

## Uso

1. Inicia el servidor de desarrollo:
    ```sh
    npm start
    ```

2. Abre tu navegador y navega a `http://localhost:3000` para ver la aplicación en acción.

## Características

- **Integración con Thirdweb**: Interacción sencilla con contratos inteligentes.
- **Uso de Base**: Implementación en la red blockchain de Base.
- **Despliegue en Fleek**: Hosting descentralizado y rápido.
- **React**: Interfaz de usuario moderna y reactiva.

## Dependencias

- **React**: Biblioteca para construir interfaces de usuario.
- **Thirdweb**: SDK para facilitar la interacción con contratos inteligentes.
- **Base**: Plataforma blockchain para desplegar contratos inteligentes.
- **Fleek**: Plataforma para el despliegue y hosting descentralizado.

## Configuración

### Thirdweb

Asegúrate de configurar tus credenciales de Thirdweb en un archivo `.env`:
```env
REACT_APP_THIRDWEB_API_KEY=tu-api-key
```
### Base
Configura la red Base en tu proyecto de Thirdweb:
```import { ChainId } from '@thirdweb-dev/sdk';```

```const activeChainId = ChainId.Base;```
### Fleek
Para desplegar en Fleek, sigue los pasos de la documentación oficial de Fleek para conectar tu repositorio y configurar el despliegue continuo.

## Contribuidores

[gabimancinir](https://github.com/gabimancini)
[jtrmTrading](https://github.com/jtrmTrading)
[nthing2say](https://github.com/nthing2say)
[cwjasmin](https://github.com/cwjasmin)

## Licencia
Este proyecto está licenciado bajo la Licencia MIT.

## Pitch
[Spanish](https://drive.google.com/file/d/1mWikWJ7Km97kIN0rRw8P-JbaWQ3eMGpg/view)
[English](https://drive.google.com/file/d/1rrGcHLpRq8vontx0FM_iPSKY7jAva0aS/view?usp=drive_link)