"use client";

import { useUser } from "@clerk/clerk-react";

export default function Profile() {
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>; // Показать загрузку, пока данные не получены
  }

  if (!isSignedIn) {
    return <div>Вы не авторизованы</div>; // Если пользователь не авторизован
  }

  const registrationDate = new Date(user.createdAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="profile">
      <h2>Ваш профиль</h2>

      <div>
        <label>Email:</label>
        <p>
          {user?.primaryEmailAddress?.emailAddress || "Email не найден"}
        </p>{" "}
        {/* Выводим email или сообщение */}
        <p>{registrationDate || ""}</p>
      </div>

      {/* Здесь добавьте остальную логику для смены пароля, если нужно */}
    </div>
  );
}
