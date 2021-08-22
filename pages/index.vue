<template>
  <div class="antialiased bg-gray-50 md:py-12 text-xs">
    <div class="page sm:flex print:flex mx-auto">
      <div class="sm:w-4/12 pt-6 px-4 bg-green-900 text-white flex flex-col">
        <Avatar class="self-center mb-2" />

        <h1 class="text-center font-bold text-2xl">Fabricio Zeferino</h1>
        <p class="text-center mb-4">Full Stack Developer</p>

        <div class="mb-4">
          <Topic icon="profile" text="Profile" />
          <p>
            &#xA0; A passionate full-stack self-taught developer that is aways
            aiming to learn. I’ve commercial experience working in an
            application built in Laravel, jQuery, Bootstrap and MySQL where I
            was responsible for making new features from scratch, going through
            all the areas of the development.
          </p>
        </div>

        <div class="mb-4">
          <Topic icon="skills" text="Skills" />

          <p class="mb-4">
            PHP - Laravel: Familiarity with OOP design principles strong
            understands of Laravel environment as the MVC life cycle. Able to
            Maintain coding standards and follow good practices. On my studies
            projects, I have used TDD. @OOP @MVC @API @Laravel @Composer
            @Eloquent @Query Builder @TDD
          </p>

          <p class="mb-4">
            JavaScript, HTML, and CSS @I've been in love with JS since day one,
            even using just Vanilla JS and jQuery in my current job I keep
            learning new technologies like Vue.js, Vuex, NPM, Webpack and
            TailwindCSS. @ES6 @Vue.js @Webpack @jQuery @Vue.Js @NPM @Tailwind
            CSS @Bootstrap
          </p>

          <p class="mb-4">
            @MySQL @Even in my no-Development jobs, I was able to discuss
            relational integrity with developers helping them to analyse the
            data. @MySQL @MongoDB @MySQLWorkbench @Webpack @jQuery @Others
          </p>

          <p class="mb-4">
            @Great knowledge using Git, git-flow a UNIX Terminal. Even using
            MacOS all the time I'm familiar with LINUX commands as basic DevOps
            configuration. @GIT @Unix Shell @MacOS @Linux @Visual Studio Code
            @PHPStorm @Docker
          </p>
        </div>

        <div class="mb-4">
          <Topic icon="education" text="Education" />
          <p class="font-bold whitespace-nowrap">
            Bachelor of Business Administration
          </p>
          <p>
            <span class="font-bold">2006 – 2010</span> | University of South of
            Santa Catarina (UNISUL)
          </p>
          <p>
            This degree gave me technical skills and knowledge such as project
            management, resource management, communication, team-working and
            problem-solving.
          </p>
        </div>

        <!-- Fabricio Zeferino

EXPERIENCE
eGov Solutions (epep.tv)
Oct 2018 | Full-Stack PHP Developer

Under the guidance of senior developer, I am responsible for analysis issues, design and code new features and improvements for an existing web application. Qualified to the development from the frontend end to the backend end throughout the Database. Worked in a Multitenancy platform for 35 councils.

Refactored the core of the application reducing class with thousands of lines and hundreds of requests to just a few, applying methods as DRY and OOP and clean code, making it much easier to maintain and productive to escalate. Restructured the database, creating referential integrity between registers running multiples SYNC to fix old hardcoding.

I have worked directly in a creation of a Microservice for reports, wherein a night routine all the data are migrated from MYSQL to a MongoDB making the reports much faster and the MYSQL free for others requests during the day. I helped to Migrate the server from Windows Server to Linux in AWS. Most relevant tools used in this role: Docker, Continues Integration, GitLab, SSH.

EDUCATION
Bachelor in Business Administration
2006 – 2010 | University of South of Santa Catarina


Key skills
/*Skills*/
-->
      </div>
      <div class="sm:w-8/12 px-6 py-12 text-gray-900">
        <div class="mb-8">
          <h1
            class="
              uppercase
              text-3xl
              font-semibold
              border-b-2 border-gray-900
              mb-4
            "
          >
            Professional Summary
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam odio
            tellus, interdum et cursus a, euismod eu dolor. Phasellus in neque
            quam. Pellentesque consectetur suscipit feugiat. Nunc condimentum,
            eros vitae cursus feugiat, lectus massa suscipit tortor, et laoreet
            erat turpis et nibh. Sed viverra ipsum quis nulla consequat euismod.
            Phasellus et congue leo. Sed egestas augue et gravida venenatis.
            Nulla a commodo urna, eu porttitor nibh. In a tortor ut nisl feugiat
            iaculis vestibulum vel nisl. Ut at fringilla nisl. Ut turpis ante,
            euismod non nisi ac, lacinia tristique felis. Vivamus molestie
            malesuada lectus in tempor.
          </p>
        </div>

        <div class="mb-8">
          <h1
            class="
              uppercase
              text-3xl
              font-semibold
              border-b-2 border-gray-900
              mb-4
            "
          >
            Work History
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam odio
            tellus, interdum et cursus a, euismod eu dolor. Phasellus in neque
            quam. Pellentesque consectetur suscipit feugiat. Nunc condimentum,
            eros vitae cursus feugiat, lectus massa suscipit tortor, et laoreet
            erat turpis et nibh. Sed viverra ipsum quis nulla consequat euismod.
            Phasellus et congue leo. Sed egestas augue et gravida venenatis.
            Nulla a commodo urna, eu porttitor nibh. In a tortor ut nisl feugiat
            iaculis vestibulum vel nisl. Ut at fringilla nisl. Ut turpis ante,
            euismod non nisi ac, lacinia tristique felis. Vivamus molestie
            malesuada lectus in tempor.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
}

body,
html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(249, 250, 251);
  /* width: 230mm; */
  height: 100%;
  margin: 0 auto;
  padding: 0;
  font-size: 1rem;
}

.page {
  max-width: 8.5in;
  /* max-height: 12in; */
  /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
}

@media print {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    break-before: always;
  }

  table,
  img,
  svg {
    break-inside: avoid;
  }

  .page {
    width: 8.5in;
    height: 12in;
    background-color: #fff;

    box-shadow: node;
  }

  @page {
    margin: 0;
  }
}
</style>
