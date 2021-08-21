<template>
  <div
    id="cv"
    class="
      font-sans
      leading-relaxed
      text-gray-900
      antialiased
      hyphens-manual
      optimize-legibility
    "
  >
    <div
      class="
        page
        mx-auto
        max-w-a4
        md:h-a4
        p-6
        sm:p-8
        md:p-16
        bg-white
        dark:bg-black-dark
      "
    >
      <div
        class="
          md:col-2
          print:col-2
          col-gap-md
          md:h-a4-col
          print:h-a4-col
          col-fill
        "
      >
        <header class="flex items-center mb-2">
          <div
            class="
              initials-container
              mr-2
              text-base
              leading-none
              text-white
              font-medium
              print:bg-black
              p-2
            "
          >
            <!--            <img
              class="h-24 w-24 rounded-full shadow-md"
              src="{{ url('images/avatar.jpg') }}"
              alt=""
            >-->
          </div>
          <div class="leading-none">
            <h1>Fabricio Zeferino</h1>
            <small class="uppercase">Full-Stack Developer</small>
          </div>
        </header>
        <section class="mb-8">
          <div class="col-break-avoid">
            <h2
              class="
                text-sm text-gray-600
                font-bold
                print:font-normal
                tracking-widest
              "
            >
              ABOUT ME
            </h2>
            <div class="h-full border-b-8 mb-4" />

            <section class="mb-2 col-break-avoid">
              <header>
                <h3 class="text-lg text-gray-700 font-semibold leading-snug">
                  Full-Stack PHP Developer
                </h3>
              </header>
              <p class="mt-2 text-gray-700 leading-normal">
                A passionate full-stack self-taught developer that is aways
                aiming to learn. I’ve commercial experience working in an
                application built in Laravel, jQuery, Bootstrap and MySQL where
                I was responsible for making new features from scratch, going
                through all the areas of the development.
              </p>
            </section>
          </div>
        </section>

        <div class="col-break-avoid">
          <h2
            class="
              text-sm text-gray-600
              font-bold
              print:font-normal
              tracking-widest
            "
          >
            EXPERIENCE
          </h2>
          <div class="h-full border-b-8 mb-4" />
        </div>

        <section class="mb-4 col-break-avoid">
          <header>
            <h3 class="text-lg text-gray-700 font-semibold leading-snug inline">
              eGov Solutions
            </h3>
            <a
              href="https://epep.tv/"
              target="_blank"
              class="text-xs text-gray-600 ml-1"
              >(epep.tv)</a
            >
            <p class="text-gray-700 leading-normal mb-2">
              Oct 2018 | Full-Stack PHP Developer
            </p>
          </header>
          <div class="text-gray-700 leading-normal">
            <p>
              Under the guidance of senior developer, I am responsible for
              analysis issues, design and code new features and improvements for
              an existing web application. Qualified to the development from the
              frontend end to the backend end throughout the Database. Worked in
              a Multitenancy platform for 35 councils.
            </p>
            <p>
              Refactored the core of the application reducing class with
              thousands of lines and hundreds of requests to just a few,
              applying methods as DRY and OOP and clean code, making it much
              easier to maintain and productive to escalate. Restructured the
              database, creating referential integrity between registers running
              multiples SYNC to fix old hardcoding.
            </p>
            <p>
              I have worked directly in a creation of a Microservice for
              reports, wherein a night routine all the data are migrated from
              MYSQL to a MongoDB making the reports much faster and the MYSQL
              free for others requests during the day. I helped to Migrate the
              server from Windows Server to Linux in AWS. Most relevant tools
              used in this role: Docker, Continues Integration, GitLab, SSH.
            </p>
          </div>
        </section>

        <section class="mt-8">
          <div class="col-break-avoid">
            <h2
              class="
                text-sm text-gray-600
                font-bold
                print:font-normal
                tracking-widest
              "
            >
              EDUCATION
            </h2>
            <div class="h-full border-b-8 mb-4" />

            <section class="mb-4 col-break-avoid">
              <header>
                <h3
                  class="text-lg text-black-medium font-semibold leading-snug"
                >
                  Bachelor in Business Administration
                </h3>
                <p class="text-gray-700 leading-normal mb-2">
                  2006 – 2010 | University of South of Santa Catarina
                </p>
                <p>
                  This degree gave me technical skills and knowledge such as
                  project management, resource management, communication,
                  team-working and problem-solving.
                </p>
              </header>
            </section>
          </div>
        </section>

        <section class="mt-4 py-2 px-4 bg-gray-200 col-break-avoid">
          <h2
            class="
              text-2xl text-black-medium
              font-extrabold
              print:font-normal
              tracking-widest
            "
          >
            Key skills
          </h2>
          <div class="h-full border-b-2 mb-4" />

          /*Skills*/
          <div
            v-for="(skill, i) in skills"
            :key="i"
            class="col-break-avoid mb-4 border-gray-200"
            :class="i !== skills.length - 1 ? 'border-b-2' : ''"
          >
            <section class="mb-4 col-break-avoid">
              <header>
                <div class="flex items-center">
                  <h3 class="inline text-lg text-black-medium font-semibold">
                    @{{ skill.title }}
                  </h3>
                </div>
                <!--                <p class="text-gray-700 leading-normal mb-2">@{{ skill.sub_title }}</p>-->
              </header>
              <p class="mt-1 text-gray-700">@{{ skill.description }}</p>
              <ul class="mt-1 mb-6 flex flex-wrap leading-normal">
                <li
                  v-for="(tag, index) in skill.tags"
                  :key="index"
                  class="
                    px-3
                    mr-1
                    mt-1
                    text-base text-gray-700
                    leading-relaxed
                    print:bg-white
                    dark:bg-black-dark
                    print:border-inset
                    bg-gray-200
                  "
                >
                  @{{ tag }}
                </li>
              </ul>
            </section>
          </div>
        </section>

        <!--        <section class="mt-8 py-2 px-4 hidden">
          <div class="col-break-avoid">
            <h2 class="text-sm text-gray-600 font-bold print:font-normal tracking-widest">
              CONTACT
            </h2>
            <div class="h-full border-b-8 mb-4" />

            <section class="mb-4 col-break-avoid">
              <ul>
                <li class="mt-1 pl-6  text-gray-700 leading-normal">
                  <svg
                    class="w-4 h-4 inline -ml-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      class="text-gray-600 print:text-gray-900 fill-current"
                      d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm16 3.38V6H4v1.38l8 4 8-4zm0 2.24l-7.55 3.77a1 1 0 0 1-.9 0L4 9.62V18h16V9.62z"
                    />
                  </svg>
                  fabriciozeferino@gmail.com
                </li>
                <li class="mt-1 pl-6  text-gray-700 leading-normal">
                  <svg
                    class="w-4 h-4 inline -ml-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      class="text-gray-600 print:text-gray-900 fill-current"
                      d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                    />
                  </svg>
                  Wirral, UK
                </li>
              </ul>
            </section>
          </div>
        </section>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResumePage',

  data() {
    return {
      message: 'Hello Vue!',
      skills: [
        {
          title: 'PHP - Laravel',
          sub_title: 'Middle Level',
          description:
            'Familiarity with OOP design principles strong understands of Laravel environment as the MVC life cycle. Able to Maintain coding standards and follow good practices. On my studies projects, I have used TDD.',
          tags: [
            'OOP',
            'MVC',
            'API',
            'Laravel',
            'Composer',
            'Eloquent',
            'Query Builder',
            'TDD',
          ],
        },
        {
          title: 'JavaScript, HTML, and CSS',
          sub_title: 'Middle Level',
          description:
            'I\'ve been in love with JS since day one, even using just Vanilla JS and jQuery in my current job I keep learning new technologies like Vue.js, Vuex, NPM, Webpack and TailwindCSS.',
          tags: [
            'ES6',
            'Vue.js',
            'Webpack',
            'jQuery',
            'Vue.Js',
            'NPM',
            'Tailwind CSS',
            'Bootstrap',
          ],
        },
        {
          title: 'MySQL',
          sub_title: 'Middle Level',
          description:
            'Even in my no-Development jobs, I was able to discuss relational integrity with developers helping them to analyse the data.',
          tags: ['MySQL', 'MongoDB', 'MySQLWorkbench', 'Webpack', 'jQuery'],
        },

        {
          title: 'Others',
          sub_title: 'Middle Level',
          description:
            'Great knowledge using Git, git-flow a UNIX Terminal. Even using MacOS all the time I\'m familiar with LINUX commands as basic DevOps configuration.',
          tags: [
            'GIT',
            'Unix Shell',
            'MacOS',
            'Linux',
            'Visual Studio Code',
            'PHPStorm',
            'Docker',
          ],
        },
      ],
    }
  },
}
</script>

<style scoped></style>
