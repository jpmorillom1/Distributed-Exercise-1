# Build stage
FROM gradle:8.7-jdk21 AS build

WORKDIR /app

# Copy Gradle files first for better layer caching
COPY build.gradle settings.gradle gradlew gradlew.bat ./
COPY gradle ./gradle
COPY src ./src

# Make the Gradle wrapper executable
RUN chmod +x ./gradlew

# Build executable jar using the wrapper
RUN ./gradlew clean bootJar -x test --no-daemon

# Runtime stage
FROM eclipse-temurin:21-jre-alpine

WORKDIR /app

# Copy the built jar from build stage
COPY --from=build /app/build/libs/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]