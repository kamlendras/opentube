import styles from "../_styles/Footer.module.scss";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
const Footer = () => {
  return (
    <Grid container spacing={0}>
      <Grid sx={12} sm={12} md={4} lg={4} xl={4} paddingLeft={5}>
      <Stack spacing={2}>
        <Typography variant="h6" gutterBottom>
          Organization
        </Typography>

        <Link
          href="https://github.com/universal-org/fosstube/blob/main/Readme.md"
         
        >
          About
        </Link>
        <Link href="/news">Blog</Link>
        <Link href="/community">Contribute</Link>
        <Link href="https://github.com/universal-org/fosstube/blob/main/Readme.md#support-the-future-of-open-video-donate-to-fosstube">Donate</Link>
        </Stack>
      </Grid>
      <Grid sx={12} sm={12} md={4} lg={4} xl={4} paddingLeft={5}>
      <Stack spacing={2}>
        <Typography variant="h6" gutterBottom>
          Help
        </Typography>
        <Link href="/community">Sign Up</Link>
        <Link href="/help">Help Center</Link>
        </Stack>
      </Grid>
      <Grid sx={12} sm={12} md={4} lg={4} xl={4} paddingLeft={5}>
      <Stack spacing={2}>
        <Typography variant="h6" gutterBottom>
          Join Us
        </Typography>
        <Link href="https://github.com/universal-org">
   <svg height="100"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="github"><g fill="currentcolor"><path fill-rule="evenodd" d="M64 1.512c-23.493 0-42.545 19.047-42.545 42.545 0 18.797 12.19 34.745 29.095 40.37 2.126.394 2.907-.923 2.907-2.047 0-1.014-.04-4.366-.058-7.92-11.837 2.573-14.334-5.02-14.334-5.02-1.935-4.918-4.724-6.226-4.724-6.226-3.86-2.64.29-2.586.29-2.586 4.273.3 6.523 4.385 6.523 4.385 3.794 6.504 9.953 4.623 12.38 3.536.383-2.75 1.485-4.628 2.702-5.69-9.45-1.075-19.384-4.724-19.384-21.026 0-4.645 1.662-8.44 4.384-11.42-.442-1.072-1.898-5.4.412-11.26 0 0 3.572-1.142 11.7 4.363 3.395-.943 7.035-1.416 10.65-1.432 3.616.017 7.258.49 10.658 1.432 8.12-5.504 11.688-4.362 11.688-4.362 2.316 5.86.86 10.187.418 11.26 2.728 2.978 4.378 6.774 4.378 11.42 0 16.34-9.953 19.938-19.427 20.99 1.526 1.32 2.886 3.91 2.886 7.88 0 5.692-.048 10.273-.048 11.674 0 1.13.766 2.458 2.922 2.04 16.896-5.632 29.07-21.574 29.07-40.365C106.545 20.56 87.497 1.512 64 1.512z" clip-rule="evenodd"></path><path d="M37.57 62.596c-.095.212-.428.275-.73.13-.31-.14-.482-.427-.382-.64.09-.216.424-.277.733-.132.31.14.486.43.38.642zm-.524-.388M39.293 64.52c-.203.187-.6.1-.87-.198-.278-.297-.33-.694-.124-.884.208-.188.593-.1.87.197.28.3.335.693.123.884zm-.406-.437M40.97 66.968c-.26.182-.687.012-.95-.367-.262-.377-.262-.83.005-1.013.264-.182.684-.018.95.357.262.385.262.84-.005 1.024zm0 0M43.268 69.336c-.233.257-.73.188-1.093-.163-.372-.343-.475-.83-.242-1.087.237-.257.736-.185 1.102.163.37.342.482.83.233 1.086zm0 0M46.44 70.71c-.104.334-.582.485-1.064.344-.482-.146-.796-.536-.7-.872.1-.336.582-.493 1.067-.342.48.144.795.53.696.87zm0 0M49.92 70.965c.013.35-.396.642-.902.648-.508.012-.92-.272-.926-.618 0-.354.4-.642.908-.65.506-.01.92.272.92.62zm0 0M53.16 70.414c.06.342-.29.694-.793.787-.494.092-.95-.12-1.014-.46-.06-.35.297-.7.79-.792.503-.088.953.118 1.017.466zm0 0"></path></g><path fill="currentcolor" d="M24.855 108.302h-10.7a.5.5 0 0 0-.5.5v5.232a.5.5 0 0 0 .5.5h4.173v6.5s-.937.32-3.53.32c-3.056 0-7.327-1.116-7.327-10.508 0-9.393 4.448-10.63 8.624-10.63 3.614 0 5.17.636 6.162.943.31.094.6-.216.6-.492l1.193-5.055a.468.468 0 0 0-.192-.39c-.403-.288-2.857-1.66-9.058-1.66-7.144 0-14.472 3.038-14.472 17.65 0 14.61 8.39 16.787 15.46 16.787 5.854 0 9.405-2.502 9.405-2.502.146-.08.162-.285.162-.38v-16.316a.5.5 0 0 0-.5-.5zM79.506 94.81H73.48a.5.5 0 0 0-.498.503l.002 11.644h-9.392V95.313a.5.5 0 0 0-.497-.503H57.07a.5.5 0 0 0-.498.503v31.53c0 .277.224.503.498.503h6.025a.5.5 0 0 0 .497-.504v-13.486h9.392l-.016 13.486c0 .278.224.504.5.504h6.038a.5.5 0 0 0 .497-.504v-31.53c0-.278-.22-.502-.497-.502zM32.34 95.527c-2.144 0-3.884 1.753-3.884 3.923 0 2.167 1.74 3.925 3.884 3.925 2.146 0 3.885-1.758 3.885-3.925 0-2.17-1.74-3.923-3.885-3.923zM35.296 105.135H29.29c-.276 0-.522.284-.522.56v20.852c0 .613.382.795.876.795h5.41c.595 0 .74-.292.74-.805v-6.346-14.553a.5.5 0 0 0-.498-.502zM102.902 105.182h-5.98a.5.5 0 0 0-.496.504v15.46s-1.52 1.11-3.675 1.11-2.727-.977-2.727-3.088v-13.482a.5.5 0 0 0-.497-.504h-6.068a.502.502 0 0 0-.498.504v14.502c0 6.27 3.495 7.804 8.302 7.804 3.944 0 7.124-2.18 7.124-2.18s.15 1.15.22 1.285c.07.136.247.273.44.273l3.86-.017a.502.502 0 0 0 .5-.504l-.003-21.166a.504.504 0 0 0-.5-.502zM119.244 104.474c-3.396 0-5.706 1.515-5.706 1.515V95.312a.5.5 0 0 0-.497-.503H107a.5.5 0 0 0-.5.503v31.53a.5.5 0 0 0 .5.503h4.192c.19 0 .332-.097.437-.268.103-.17.254-1.454.254-1.454s2.47 2.34 7.148 2.34c5.49 0 8.64-2.784 8.64-12.502s-5.03-10.988-8.428-10.988zm-2.36 17.764c-2.073-.063-3.48-1.004-3.48-1.004v-9.985s1.388-.85 3.09-1.004c2.153-.193 4.228.458 4.228 5.594 0 5.417-.935 6.486-3.837 6.398zM53.195 122.12c-.263 0-.937.107-1.63.107-2.22 0-2.973-1.032-2.973-2.368v-8.866h4.52a.5.5 0 0 0 .5-.504v-4.856a.5.5 0 0 0-.5-.502h-4.52l-.007-5.97c0-.227-.116-.34-.378-.34h-6.16c-.238 0-.367.106-.367.335v6.17s-3.087.745-3.295.805a.5.5 0 0 0-.36.48v3.877a.5.5 0 0 0 .497.503h3.158v9.328c0 6.93 4.86 7.61 8.14 7.61 1.497 0 3.29-.48 3.586-.59.18-.067.283-.252.283-.453l.004-4.265a.51.51 0 0 0-.5-.502z"></path></svg>
        </Link>
        <Link href="https://matrix.to/#/#Universaldev:matrix.org">
        
        <svg height="32" fill="currentcolor" viewBox="0 0 75 32" xmlns="http://www.w3.org/2000/svg" >

<g >
 <path d="m0.936 0.732v30.52h2.194v0.732h-3.035v-31.98h3.034v0.732zm8.45 9.675v1.544h0.044a4.461 4.461 0 0 1 1.487-1.368c0.58-0.323 1.245-0.485 1.993-0.485 0.72 0 1.377 0.14 1.972 0.42 0.595 0.279 1.047 0.771 1.355 1.477 0.338-0.5 0.796-0.941 1.377-1.323 0.58-0.383 1.266-0.574 2.06-0.574 0.602 0 1.16 0.074 1.674 0.22 0.514 0.148 0.954 0.383 1.322 0.707 0.366 0.323 0.653 0.746 0.859 1.268 0.205 0.522 0.308 1.15 0.308 1.887v7.633h-3.127v-6.464c0-0.383-0.015-0.743-0.044-1.082a2.305 2.305 0 0 0-0.242-0.882 1.473 1.473 0 0 0-0.584-0.596c-0.257-0.146-0.606-0.22-1.047-0.22-0.44 0-0.796 0.085-1.068 0.253-0.272 0.17-0.485 0.39-0.639 0.662a2.654 2.654 0 0 0-0.308 0.927 7.074 7.074 0 0 0-0.078 1.048v6.354h-3.128v-6.398c0-0.338-7e-3 -0.673-0.021-1.004a2.825 2.825 0 0 0-0.188-0.916 1.411 1.411 0 0 0-0.55-0.673c-0.258-0.168-0.636-0.253-1.135-0.253a2.33 2.33 0 0 0-0.584 0.1 1.94 1.94 0 0 0-0.705 0.374c-0.228 0.184-0.422 0.449-0.584 0.794-0.161 0.346-0.242 0.798-0.242 1.357v6.619h-3.129v-11.41zm16.46 1.677a3.751 3.751 0 0 1 1.233-1.17 5.37 5.37 0 0 1 1.685-0.629 9.579 9.579 0 0 1 1.884-0.187c0.573 0 1.153 0.04 1.74 0.121 0.588 0.081 1.124 0.24 1.609 0.475 0.484 0.235 0.88 0.562 1.19 0.981 0.308 0.42 0.462 0.975 0.462 1.666v5.934c0 0.516 0.03 1.008 0.088 1.478 0.058 0.471 0.161 0.824 0.308 1.06h-3.171a4.435 4.435 0 0 1-0.22-1.104c-0.5 0.515-1.087 0.876-1.762 1.081a7.084 7.084 0 0 1-2.071 0.31c-0.544 0-1.05-0.067-1.52-0.2a3.472 3.472 0 0 1-1.234-0.617 2.87 2.87 0 0 1-0.826-1.059c-0.199-0.426-0.298-0.934-0.298-1.522 0-0.647 0.114-1.18 0.342-1.6 0.227-0.419 0.52-0.753 0.881-1.004 0.36-0.25 0.771-0.437 1.234-0.562 0.462-0.125 0.929-0.224 1.399-0.298 0.47-0.073 0.932-0.132 1.387-0.176 0.456-0.044 0.86-0.11 1.212-0.199 0.353-0.088 0.631-0.217 0.837-0.386s0.301-0.415 0.287-0.74c0-0.337-0.055-0.606-0.166-0.804a1.217 1.217 0 0 0-0.44-0.464 1.737 1.737 0 0 0-0.639-0.22 5.292 5.292 0 0 0-0.782-0.055c-0.617 0-1.101 0.132-1.454 0.397-0.352 0.264-0.558 0.706-0.617 1.323h-3.128c0.044-0.735 0.227-1.345 0.55-1.83zm6.179 4.423a5.095 5.095 0 0 1-0.639 0.165 9.68 9.68 0 0 1-0.716 0.11c-0.25 0.03-0.5 0.067-0.749 0.11a5.616 5.616 0 0 0-0.694 0.177 2.057 2.057 0 0 0-0.594 0.298c-0.17 0.125-0.305 0.284-0.408 0.474-0.103 0.192-0.154 0.434-0.154 0.728 0 0.28 0.051 0.515 0.154 0.706 0.103 0.192 0.242 0.342 0.419 0.453 0.176 0.11 0.381 0.187 0.617 0.231 0.234 0.044 0.477 0.066 0.726 0.066 0.617 0 1.094-0.102 1.432-0.309 0.338-0.205 0.587-0.452 0.75-0.739 0.16-0.286 0.26-0.576 0.297-0.87 0.036-0.295 0.055-0.53 0.055-0.707v-1.17a1.4 1.4 0 0 1-0.496 0.277zm11.86-6.1v2.096h-2.291v5.647c0 0.53 0.088 0.883 0.264 1.059 0.176 0.177 0.529 0.265 1.057 0.265 0.177 0 0.345-7e-3 0.507-0.022 0.161-0.015 0.316-0.037 0.463-0.066v2.426a7.49 7.49 0 0 1-0.882 0.089 21.67 21.67 0 0 1-0.947 0.022c-0.484 0-0.944-0.034-1.377-0.1a3.233 3.233 0 0 1-1.145-0.386 2.04 2.04 0 0 1-0.782-0.816c-0.191-0.353-0.287-0.816-0.287-1.39v-6.728h-1.894v-2.096h1.894v-3.42h3.129v3.42h2.29zm4.471 0v2.118h0.044a3.907 3.907 0 0 1 1.454-1.754 4.213 4.213 0 0 1 1.036-0.497 3.734 3.734 0 0 1 1.145-0.176c0.206 0 0.433 0.037 0.683 0.11v2.912a5.862 5.862 0 0 0-0.528-0.077 5.566 5.566 0 0 0-0.595-0.033c-0.573 0-1.058 0.096-1.454 0.287a2.52 2.52 0 0 0-0.958 0.783 3.143 3.143 0 0 0-0.518 1.158 6.32 6.32 0 0 0-0.154 1.434v5.14h-3.128v-11.4zm5.684-1.765v-2.582h3.128v2.582h-3.127zm3.128 1.765v11.4h-3.127v-11.4h3.128zm1.63 0h3.569l2.005 2.978 1.982-2.978h3.459l-3.745 5.339 4.208 6.067h-3.57l-2.378-3.596-2.38 3.596h-3.502l4.097-6.001zm15.3 20.84v-30.52h-2.194v-0.732h3.035v31.98h-3.035v-0.732z"/>
</g>
</svg>
          
        </Link>
        <Link href="https://fosstodon.org/@universal">
          {/* <img src="/mastodon.svg" height={32} style={{
            fill:"currentcolor",
          }} /> */}
          <svg  height="32" fill="currentcolor" viewBox="0 0 314 80"  xmlns="http://www.w3.org/2000/svg">
<path d="M73.4455 17.6962C72.3169 9.19775 65.0038 2.48901 56.346 1.19841C54.8811 0.979247 49.3453 0.175659 36.5206 0.175659H36.4245C23.5879 0.175659 20.838 0.979247 19.373 1.19841C10.9433 2.46467 3.25813 8.4794 1.38487 17.0875C0.496264 21.3246 0.400199 26.0244 0.568313 30.3345C0.808475 36.5198 0.856508 42.6805 1.40888 48.8414C1.79314 52.9325 2.45359 56.9869 3.40223 60.9804C5.17943 68.3588 12.3603 74.4954 19.3971 76.9914C26.9261 79.5969 35.0317 80.0352 42.7888 78.2453C43.6414 78.0385 44.482 77.8071 45.3226 77.5392C47.2079 76.9304 49.4173 76.2486 51.0504 75.0555C51.0745 75.0432 51.0865 75.0189 51.0985 74.9945C51.1105 74.9702 51.1225 74.9458 51.1225 74.9093V68.9433C51.1225 68.9433 51.1225 68.8946 51.0985 68.8702C51.0985 68.8459 51.0745 68.8215 51.0504 68.8093C51.0264 68.7972 51.0024 68.785 50.9785 68.7728C50.9543 68.7728 50.9304 68.7728 50.9064 68.7728C45.9349 69.9783 40.8316 70.587 35.7281 70.5748C26.9261 70.5748 24.5605 66.3377 23.8881 64.5844C23.3477 63.0625 22.9995 61.4675 22.8554 59.8603C22.8554 59.8359 22.8554 59.8116 22.8674 59.7873C22.8674 59.7629 22.8914 59.7386 22.9155 59.7263C22.9394 59.7142 22.9634 59.702 22.9874 59.6899H23.0715C27.9588 60.883 32.9782 61.4918 38.0096 61.4918C39.2225 61.4918 40.4232 61.4918 41.6361 61.4554C46.6915 61.3092 52.0232 61.0535 57.0065 60.0673C57.1265 60.0429 57.2587 60.0186 57.3667 59.9943C65.2201 58.4601 72.6891 53.6629 73.4455 41.5117C73.4697 41.0369 73.5417 36.4954 73.5417 36.0084C73.5417 34.3159 74.082 24.0398 73.4576 17.7207L73.4455 17.6962Z" fill="url(#paint0_linear_612_176)"/>
<path d="M15.3145 22.4452C15.3145 19.9613 17.2718 17.9646 19.6974 17.9646C22.1231 17.9646 24.0803 19.9735 24.0803 22.4452C24.0803 24.9168 22.1231 26.9257 19.6974 26.9257C17.2718 26.9257 15.3145 24.9168 15.3145 22.4452Z" fill="white"/>
<path d="M80.5188 26.3048V46.9058H72.5334V26.9136C72.5334 22.7008 70.8042 20.57 67.3338 20.57C63.5033 20.57 61.5699 23.1148 61.5699 28.1189V39.0647H53.6446V28.1189C53.6446 23.0904 51.7353 20.57 47.8807 20.57C44.4224 20.57 42.6811 22.7008 42.6811 26.9136V46.8937H34.7078V26.3048C34.7078 22.1042 35.7525 18.7559 37.8539 16.2721C40.0274 13.7883 42.8733 12.5342 46.3916 12.5342C50.4744 12.5342 53.5725 14.1413 55.614 17.3557L57.6073 20.7649L59.6007 17.3557C61.642 14.1536 64.7281 12.5342 68.8229 12.5342C72.3412 12.5342 75.1872 13.8005 77.3607 16.2721C79.4621 18.7559 80.5068 22.0798 80.5068 26.3048H80.5188ZM107.993 36.5444C109.65 34.7546 110.431 32.5386 110.431 29.8357C110.431 27.1327 109.638 24.8924 107.993 23.1879C106.408 21.398 104.391 20.5457 101.953 20.5457C99.5156 20.5457 97.5102 21.398 95.9132 23.1879C94.3281 24.8924 93.5356 27.1327 93.5356 29.8357C93.5356 32.5386 94.3281 34.7789 95.9132 36.5444C97.4982 38.2489 99.5156 39.1135 101.953 39.1135C104.391 39.1135 106.396 38.2612 107.993 36.5444ZM110.431 13.3622H118.296V46.3093H110.431V42.4253C108.053 45.6517 104.763 47.2468 100.488 47.2468C96.2134 47.2468 92.9232 45.603 90.0052 42.2426C87.1353 38.8822 85.6823 34.7302 85.6823 29.86C85.6823 24.9898 87.1472 20.8988 90.0052 17.5383C92.9352 14.1779 96.4176 12.4734 100.488 12.4734C104.559 12.4734 108.053 14.0562 110.431 17.2705V13.3865V13.3622ZM144.762 29.2148C147.08 31.0045 148.233 33.5006 148.173 36.654C148.173 40.0144 147.02 42.6566 144.642 44.4829C142.265 46.2727 139.394 47.1858 135.912 47.1858C129.632 47.1858 125.369 44.5438 123.111 39.357L129.933 35.2051C130.844 38.0298 132.851 39.4909 135.912 39.4909C138.722 39.4909 140.115 38.5778 140.115 36.6661C140.115 35.2782 138.289 34.0241 134.567 33.05C133.162 32.6604 131.998 32.2586 131.097 31.9299C129.812 31.4064 128.719 30.8097 127.806 30.0792C125.549 28.2894 124.397 25.9273 124.397 22.8956C124.397 19.6691 125.489 17.1 127.687 15.2494C129.945 13.3378 132.694 12.4246 135.984 12.4246C141.231 12.4246 145.062 14.7258 147.572 19.4012L140.872 23.346C139.899 21.1058 138.241 19.9856 135.984 19.9856C133.606 19.9856 132.454 20.8988 132.454 22.6886C132.454 24.0767 134.279 25.3308 138.002 26.3048C140.872 26.9623 143.129 27.9485 144.762 29.2148H144.774H144.762ZM169.764 21.5198H162.87V35.2295C162.87 36.8731 163.483 37.8715 164.648 38.3221C165.5 38.6508 167.206 38.7116 169.776 38.5899V46.2971C164.48 46.9545 160.637 46.4188 158.38 44.6533C156.122 42.9487 155.029 39.771 155.029 35.2416V21.5198H149.733V13.3499H155.029V6.7021L162.894 4.13305V13.3622H169.788V21.532H169.776L169.764 21.5198ZM194.836 36.3496C196.422 34.6451 197.213 32.4656 197.213 29.8236C197.213 27.1814 196.422 25.0264 194.836 23.2974C193.239 21.5928 191.293 20.7283 188.916 20.7283C186.538 20.7283 184.593 21.5807 182.996 23.2974C181.471 25.0872 180.678 27.2423 180.678 29.8236C180.678 32.4047 181.471 34.5598 182.996 36.3496C184.581 38.0542 186.538 38.9186 188.916 38.9186C191.293 38.9186 193.239 38.0664 194.836 36.3496ZM177.461 42.206C174.35 38.8456 172.826 34.7668 172.826 29.8236C172.826 24.8802 174.35 20.8623 177.461 17.5019C180.571 14.1413 184.413 12.4368 188.916 12.4368C193.419 12.4368 197.274 14.1413 200.372 17.5019C203.47 20.8623 205.067 25.0141 205.067 29.8236C205.067 34.6328 203.47 38.8456 200.372 42.206C197.261 45.5666 193.48 47.2102 188.916 47.2102C184.353 47.2102 180.559 45.5666 177.461 42.206ZM231.364 36.5323C232.95 34.7425 233.742 32.5265 233.742 29.8236C233.742 27.1206 232.95 24.8802 231.364 23.1756C229.78 21.3858 227.763 20.5336 225.325 20.5336C222.888 20.5336 220.869 21.3858 219.225 23.1756C217.64 24.8802 216.847 27.1206 216.847 29.8236C216.847 32.5265 217.64 34.7668 219.225 36.5323C220.881 38.2368 222.948 39.1013 225.325 39.1013C227.703 39.1013 229.768 38.249 231.364 36.5323ZM233.742 0.163818H241.607V46.2971H233.742V42.413C231.425 45.6396 228.135 47.2345 223.86 47.2345C219.585 47.2345 216.247 45.5909 213.304 42.2304C210.434 38.8699 208.982 34.7181 208.982 29.8479C208.982 24.9777 210.446 20.8867 213.304 17.5262C216.222 14.1657 219.765 12.4611 223.86 12.4611C227.955 12.4611 231.425 14.044 233.742 17.2583V0.175994V0.163818ZM269.238 36.313C270.823 34.6085 271.616 32.4291 271.616 29.787C271.616 27.1449 270.823 24.9898 269.238 23.2609C267.654 21.5563 265.708 20.6919 263.318 20.6919C260.929 20.6919 258.996 21.5441 257.399 23.2609C255.873 25.0507 255.08 27.2057 255.08 29.787C255.08 32.3682 255.873 34.5232 257.399 36.313C258.984 38.0177 260.941 38.8822 263.318 38.8822C265.696 38.8822 267.642 38.0298 269.238 36.313ZM251.863 42.1696C248.765 38.809 247.227 34.7302 247.227 29.787C247.227 24.8437 248.753 20.8257 251.863 17.4653C254.972 14.1049 258.815 12.4002 263.318 12.4002C267.822 12.4002 271.676 14.1049 274.774 17.4653C277.884 20.8257 279.469 24.9777 279.469 29.787C279.469 34.5964 277.884 38.809 274.774 42.1696C271.664 45.53 267.882 47.1737 263.318 47.1737C258.755 47.1737 254.96 45.53 251.863 42.1696ZM313.5 26.0248V46.2605H305.635V27.084C305.635 24.9045 305.094 23.2609 303.978 22.019C302.945 20.8988 301.48 20.3144 299.594 20.3144C295.152 20.3144 292.894 23.0173 292.894 28.4842V46.2727H285.029V13.3499H292.894V17.0513C294.779 13.9587 297.781 12.4368 301.973 12.4368C305.322 12.4368 308.072 13.6179 310.211 16.0529C312.408 18.4881 313.5 21.7877 313.5 26.0612" fill="currentcolor"/>
<defs>
<linearGradient id="paint0_linear_612_176" x1="37.121" y1="0.175659" x2="37.121" y2="79.3169" gradientUnits="userSpaceOnUse">
<stop stop-color="#6364FF"/>
<stop offset="1" stop-color="#563ACC"/>
</linearGradient>
</defs>
</svg>
        </Link>
        </Stack>
      </Grid>
    </Grid>
  );
};
export default Footer;
